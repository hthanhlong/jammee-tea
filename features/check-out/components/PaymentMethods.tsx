import clsx from "clsx"
import Decimal from "decimal.js"
import { Label, TextInput } from "flowbite-react"
import React from "react"
import useCheckout from "../hooks/useCheckout"
import { tips } from "../data"

const PaymentMethods = () => {
  const { paymentMethod, setPaymentMethod, addTip, tip, totalPriceWithoutTip } = useCheckout()

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
        <div className="border-2 p-2">
          <form className="mb-8">
            <div className="mb-1">
              <Label htmlFor="card_number" className="text-sm font-bold">
                Card Number
              </Label>
              <TextInput id="card_number" type="text" placeholder="Type your card number" />
            </div>
            <div className="flex w-full gap-4">
              <div>
                <Label htmlFor="card_holder" className="text-sm font-bold">
                  Expire Date
                </Label>
                <TextInput id="card_holder" type="text" placeholder="Type your card holder" />
              </div>
              <div className="">
                <Label htmlFor="card_holder" className="text-sm font-bold">
                  CVC
                </Label>
                <TextInput id="card_holder" type="text" placeholder="Type your card holder" />
              </div>
            </div>
          </form>
          <div className="mb-4">
            <div className="title mb-1 text-sm font-bold">Tip</div>
            <div className="flex gap-2">
              {tips.map((t) => (
                <button
                  key={t.label}
                  type="button"
                  className={clsx("w-full rounded-md bg-slate-200 p-2 text-center", {
                    "!bg-red-300": tip === t.value,
                  })}
                  onClick={() => addTip(t.value)}
                >
                  {t.label}
                  <div className="text-xs">
                    &#10088;{new Decimal(totalPriceWithoutTip).mul(t.value - 1).toFixed(2)} $ &#10089;
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PaymentMethods
