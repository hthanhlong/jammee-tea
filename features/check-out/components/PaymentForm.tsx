import { Label, TextInput } from "flowbite-react"
import React from "react"

const PaymentForm = () => {
  return (
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
    </div>
  )
}

export default PaymentForm
