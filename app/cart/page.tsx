"use client"
import { Label, Select, TextInput } from "flowbite-react"
import { useState } from "react"
import Wrapper from "components/Wrapper/Wrapper"
import OrderSummary from "features/check-out/components/OrderSummary"

export default function Cart() {
  const [paymentMethod, setPaymentMethod] = useState("in-person")

  return (
    <>
      <Wrapper>
        <form className="flex size-full flex-col">
          <div className="mb-2 flex gap-4 overflow-auto p-4">
            <div className="cart_left w-full">
              <div className="customer_information mb-4">
                <div className="title mb-1 text-sm font-bold">Customer Information</div>
                <div className="flex w-full gap-4">
                  <div className="w-full">
                    <TextInput placeholder="Type your name" id="small" type="text" sizing="sm" />
                  </div>
                  <div className="w-full">
                    <TextInput placeholder="Type your phone" id="small" type="text" sizing="sm" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="ordering_methods mb-4 w-full">
                  <div className="title mb-1 text-sm font-bold">Ordering Methods</div>
                  <p>Pickup</p>
                </div>
                <div className="available_time_pickup mb-4 w-full">
                  <div className="title mb-1 text-sm font-bold">Available time for pickup</div>

                  <Select id="countries" required>
                    <option>As soon as possible</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                </div>
              </div>
              <div className="payment_methods mb-4">
                <div className="title mb-1 text-sm font-bold">Payment methods</div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`w-full rounded-md p-2 text-center ${
                      paymentMethod === "in-person" ? "bg-red-300" : "bg-slate-400"
                    }`}
                    onClick={() => setPaymentMethod("in-person")}
                  >
                    In-Person
                  </button>
                  <button
                    type="button"
                    className={`w-full rounded-md  p-2 text-center ${
                      paymentMethod === "online" ? "bg-red-300" : "bg-slate-400"
                    }`}
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
                      <button type="button" className="w-full rounded-sm bg-red-200 p-1 text-center">
                        5%
                      </button>
                      <button type="button" className="w-full rounded-sm bg-red-200 p-1 text-center">
                        10%
                      </button>
                      <button type="button" className="w-full rounded-sm bg-red-200 p-1 text-center">
                        15%
                      </button>
                      <button type="button" className="w-full rounded-sm bg-red-200 p-1 text-center">
                        19%
                      </button>
                      <button type="button" className="w-full rounded-sm bg-red-200 p-1 text-center">
                        none
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="cart_right w-full">
              <OrderSummary />
            </div>
          </div>
          <div className="flex-center mt-auto flex min-h-14 gap-5 bg-red-200">
            <span>Total:{123}</span>
            <span>Place Order</span>
          </div>
        </form>
      </Wrapper>
    </>
  )
}
