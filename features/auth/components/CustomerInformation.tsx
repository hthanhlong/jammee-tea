import { TextInput } from "flowbite-react"
import { useState } from "react"
import ModalPhoneVerification from "./ModalPhoneVerification"
import { regexPhoneOfCanada } from "../data"
import useAuth from "../hooks/useAuth"

const CustomerInformation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isDisabledVerification } = useAuth()

  const [customerPhone, setCustomerPhone] = useState({
    value: "",
    isValid: false,
  })

  const [customerName, setCustomerName] = useState({
    value: "",
    isValid: false,
  })

  const handleOnChangeCustomerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3) {
      setCustomerName({ value: e.target.value, isValid: true })
      return
    }
    setCustomerName({ value: e.target.value, isValid: false })
  }

  const handleOnChangeCustomerPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 14) return
    if (regexPhoneOfCanada.test(e.target.value)) {
      const phone = e.target.value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
      setCustomerPhone({ value: phone, isValid: true })
      return
    }
    // reset phone format
    const phone = e.target.value.replace(/[^0-9]/g, "")
    setCustomerPhone({ value: phone, isValid: false })
  }

  const handleSendVerificationCode = () => {
    if (customerName.isValid && customerPhone.isValid) {
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <div className="mb-4">
        <div className="customer_information">
          <div className="title mb-1 text-sm font-bold">Customer Information</div>
          <div className="flex w-full gap-4 max-md:flex-col">
            <div className="w-full">
              <TextInput
                value={customerName.value}
                onChange={handleOnChangeCustomerName}
                className="max-md:text-sm"
                placeholder="Type your name"
                id="small"
                type="text"
                sizing="sm"
                minLength={3}
                maxLength={32}
                autoComplete="off"
                disabled={isDisabledVerification}
              />
            </div>
            <div className="w-full">
              <TextInput
                autoComplete="off"
                value={customerPhone.value}
                onChange={handleOnChangeCustomerPhone}
                className="max-md:text-sm"
                placeholder="Type your phone"
                id="small"
                type="text"
                sizing="sm"
                maxLength={14}
                disabled={isDisabledVerification}
              />
            </div>
            {!isDisabledVerification && (
              <button
                disabled={!customerName.isValid || !customerPhone.isValid}
                onClick={handleSendVerificationCode}
                type="button"
                className="h-8 rounded-sm bg-red-300 px-2 text-center text-black transition-all hover:bg-slate-300 disabled:bg-gray-300"
              >
                Verify
              </button>
            )}
          </div>
        </div>
      </div>
      <ModalPhoneVerification isOpen={isModalOpen} onSetIsModalOpen={setIsModalOpen} />
    </>
  )
}
export default CustomerInformation
