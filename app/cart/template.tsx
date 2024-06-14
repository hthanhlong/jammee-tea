"use client"
import { Elements } from "@stripe/react-stripe-js"
import React from "react"
import { AMOUNT_STEP, CURRENCY, MAX_AMOUNT } from "features/check-out/data"
import getStripe from "features/check-out/utils/get-stripe"

const template = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </Elements>
  )
}

export default template
