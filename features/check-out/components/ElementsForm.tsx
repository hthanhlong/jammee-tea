"use client"

import { Elements } from "@stripe/react-stripe-js"
import * as React from "react"
import { CheckoutForm } from "./CheckoutForm"
import { AMOUNT_STEP, CURRENCY, MAX_AMOUNT } from "../data"
import getStripe from "../utils/get-stripe"

export default function ElementsForm(): JSX.Element {
  return (
    <Elements
      stripe={getStripe()}
      options={{
        appearance: {
          variables: {
            colorIcon: "#6772e5",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          },
        },
        currency: CURRENCY,
        mode: "payment",
        amount: Math.round(MAX_AMOUNT / AMOUNT_STEP),
      }}
    >
      <CheckoutForm />
    </Elements>
  )
}
