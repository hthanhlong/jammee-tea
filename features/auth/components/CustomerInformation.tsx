import { TextInput } from "flowbite-react"
import React from "react"
import ModalPhoneVerification from "./ModalPhoneVerification"

const CustomerInformation = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <div className="mb-4">
        <div className="customer_information">
          <div className="title mb-1 text-sm font-bold">Customer Information</div>
          <div className="flex w-full gap-4 max-md:flex-col">
            <div className="w-full">
              <TextInput className="max-md:text-sm" placeholder="Type your name" id="small" type="text" sizing="sm" />
            </div>
            <div className="w-full">
              <TextInput className="max-md:text-sm" placeholder="Type your phone" id="small" type="text" sizing="sm" />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="h-8 rounded-sm bg-red-300 px-2 text-center text-black transition-all hover:bg-slate-300"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
      <ModalPhoneVerification isOpen={isModalOpen} onSetIsModalOpen={setIsModalOpen} />
    </>
  )
}
export default CustomerInformation
