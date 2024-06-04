import { TextInput } from "flowbite-react"
import React from "react"

const CustomerInformation = () => {
  return (
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
  )
}

export default CustomerInformation
