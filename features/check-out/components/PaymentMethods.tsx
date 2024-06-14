import { PaymentElement } from "@stripe/react-stripe-js"
import clsx from "clsx"
import React from "react"
import Tip from "./Tip"
import useCheckout from "../hooks/useCheckout"

const PaymentMethods = () => {
  const { paymentMethod, setPaymentMethod } = useCheckout()

  return (
    <>
      <div className="payment_methods mb-4">
        <div className="title mb-1 text-sm font-bold">Payment methods</div>
        <div className="flex gap-2">
          <button
            type="button"
            className={clsx("w-full rounded-md bg-slate-200 p-2 text-center", {
              "!bg-red-300": paymentMethod === "in-person",
            })}
            onClick={() => setPaymentMethod("in-person")}
          >
            In-Person
          </button>
          <button
            type="button"
            className={clsx("w-full rounded-md bg-slate-200 p-2 text-center", {
              "!bg-red-300": paymentMethod === "online",
            })}
            onClick={() => setPaymentMethod("online")}
          >
            Online
          </button>
        </div>
      </div>
      {paymentMethod === "online" && (
        <>
          <div className="mb-1 p-4 text-sm text-red-500">
            The payment feature is on testing mode. <br />
            Please type 4242 4242 4242 4242 on card number
          </div>
          <PaymentElement />
          <Tip />
        </>
      )}
    </>
  )
}

export default PaymentMethods
