"use client"

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import type { StripeError } from "@stripe/stripe-js"
import { Button } from "flowbite-react"
import * as React from "react"
import { createPaymentIntent } from "../actions/stripe"
import useCheckout from "../hooks/useCheckout"

export function CheckoutForm(): JSX.Element {
  const { finalPrice } = useCheckout()

  const stripe = useStripe()
  const elements = useElements()

  return (
    <div className="border-2 p-10">
      <input type="hidden" name="amount" value={finalPrice} />
      <div className="elements-style ">
        <div className="FormRow elements-style">
          <PaymentElement />
        </div>
      </div>
    </div>
  )
}
