"use client"

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import type { StripeError } from "@stripe/stripe-js"
import { Button } from "flowbite-react"
import * as React from "react"
import { createPaymentIntent } from "../actions/stripe"
import useCheckout from "../hooks/useCheckout"

export function CheckoutForm(): JSX.Element {
  const { finalPrice } = useCheckout()
  const [renderCheckoutFormCompleted, setRenderCheckoutFormCompleted] = React.useState<boolean>(false)

  const [payment, setPayment] = React.useState<{
    status: "initial" | "processing" | "error"
  }>({ status: "initial" })
  const [errorMessage, setErrorMessage] = React.useState<string>("")

  const stripe = useStripe()
  const elements = useElements()

  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case "processing":
      case "requires_payment_method":
      case "requires_confirmation":
        return <h2>Processing...</h2>

      case "requires_action":
        return <h2>Authenticating...</h2>

      case "succeeded":
        return <h2>Payment Succeeded 🥳</h2>

      case "error":
        return <p className="error-message text-red-500">{errorMessage}</p>

      default:
        return null
    }
  }
  const renderContentButton = ({ status }: { status: string }) => {
    switch (status) {
      case "initial":
        return "Check out"
      case "requires_action":
        return "Authenticating..."
      case "processing":
        return "Processing..."
      case "succeeded":
        return "Payment Succeeded"
      default:
        return "Check out"
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault()
      // Abort if form isn't valid
      if (!e.currentTarget.reportValidity()) return
      if (!elements || !stripe || !finalPrice) return
      setPayment({ status: "processing" })
      elements.update({ amount: 999 * 100 })
      const { error: submitError } = await elements.submit()
      if (submitError) {
        setPayment({ status: "error" })
        setErrorMessage(submitError.message ?? "An unknown error occurred")
        return
      }
      const { client_secret: clientSecret } = await createPaymentIntent(new FormData(e.target as HTMLFormElement))
      const { error: confirmError } = await stripe!.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/check-out/success`,
        },
      })
      if (confirmError) {
        setPayment({ status: "error" })
        setErrorMessage(confirmError.message ?? "An unknown error occurred")
      }
    } catch (err) {
      const { message } = err as StripeError
      setPayment({ status: "error" })
      setErrorMessage(message ?? "An unknown error occurred")
    }
  }

  return (
    <form className="border-2 p-10" onSubmit={handleSubmit}>
      {renderCheckoutFormCompleted && (
        <div className="flex-center">
          <h1 className="text-xl">Total price: {finalPrice}$</h1>
        </div>
      )}
      <input type="hidden" name="amount" value={finalPrice} />
      <div className="elements-style ">
        <div className="FormRow elements-style">
          <PaymentElement
            onChange={() => {
              setRenderCheckoutFormCompleted(true)
            }}
          />
        </div>
        <div className="flex-center my-8">
          {renderCheckoutFormCompleted ? (
            <Button
              className="w-[200px]"
              type="submit"
              disabled={!["initial", "succeeded", "error"].includes(payment.status) || !stripe}
            >
              {renderContentButton(payment)}
            </Button>
          ) : (
            <div className="">...loading</div>
          )}
        </div>
        <div className="flex-center">
          <PaymentStatus status={payment.status} />
        </div>
      </div>
    </form>
  )
}
