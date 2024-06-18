import { PaymentElement } from "@stripe/react-stripe-js"
import { Spinner } from "flowbite-react"
import { useState } from "react"
import Tip from "./Tip"

const PaymentMethods = () => {
  const [isRender, setIsRender] = useState(false)

  return (
    <div className="payment_methods mb-4 border-2 p-2">
      <PaymentElement onReady={() => setIsRender(true)} />
      {isRender ? (
        <>
          <Tip />
          <div className="mb-1 text-sm font-bold text-red-500">
            The payment feature is on testing mode. Please type 4242 4242 4242 4242 on card number
          </div>
        </>
      ) : (
        <div className="flex-center">
          <Spinner aria-label="Default status example" />
        </div>
      )}
    </div>
  )
}

export default PaymentMethods
