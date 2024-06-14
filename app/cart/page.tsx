"use client"
import { useElements, useStripe } from "@stripe/react-stripe-js"
// import { StripeError } from "@stripe/stripe-js"
import Wrapper from "components/Wrapper/Wrapper"
import CustomerInformation from "features/auth/components/CustomerInformation"
import { createPaymentIntent } from "features/check-out/actions/stripe"
import AvailableTimeForPickup from "features/check-out/components/AvailableTimeForPickup"
import OrderingMethod from "features/check-out/components/OrderingMethod"
import OrderSummary from "features/check-out/components/OrderSummary"
import PaymentMethods from "features/check-out/components/PaymentMethods"
import TotalPriceOnPlaceOrder from "features/check-out/components/TotalPriceOnPlaceOrder"
import useCheckout from "features/check-out/hooks/useCheckout"
import { useOrderStore } from "stores/order-store"

export default function Cart() {
  const { cart } = useOrderStore()
  const { finalPrice } = useCheckout()
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault()
      // Abort if form isn't valid
      if (!e.currentTarget.reportValidity()) return
      if (!elements || !stripe || !finalPrice) return
      elements.update({ amount: 999 * 100 })
      const { error: submitError } = await elements.submit()
      if (submitError) {
        // setErrorMessage(submitError.message ?? "An unknown error occurred")
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
        // setPayment({ status: "error" })
        // setErrorMessage(confirmError.message ?? "An unknown error occurred")
      }
    } catch (err) {
      // const { message } = err as StripeError
      // setPayment({ status: "error" })
      // setErrorMessage(message ?? "An unknown error occurred")
    }
  }

  return (
    <Wrapper>
      {cart.length === 0 ? (
        <div className="flex-center h-full">Your cart is empty</div>
      ) : (
        <form className="flex size-full flex-col" onSubmit={handleSubmit}>
        
          <div className="mb-2 flex gap-4 overflow-auto p-4 max-lg:flex-col">
            <div className="cart_left w-full">
              <CustomerInformation />
              <div className="flex gap-4">
                <OrderingMethod />
                <AvailableTimeForPickup />
              </div>
              <PaymentMethods />
            </div>
            <div className="cart_right w-full">
              <OrderSummary cart={cart} />
            </div>
          </div>
          <input type="text" name="amount" hidden value={finalPrice} />
          <TotalPriceOnPlaceOrder finalPrice={finalPrice} />
        </form>
      )}
    </Wrapper>
  )
}
