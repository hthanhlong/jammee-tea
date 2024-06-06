"use client"
import { Modal } from "flowbite-react"
import React, { useEffect, useState } from "react"
import { NUMBER_OF_INPUTS } from "../data"

const ModalPhoneVerification = () => {
  const [inputValues, setInputValues] = useState<string[]>(Array(NUMBER_OF_INPUTS).fill(""))
  // const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target
    setInputValues((prev) => {
      const newValues = [...prev]
      newValues[index] = value
      return newValues
    })
    if (value) {
      // if (index < NUMBER_OF_INPUTS - 1) {
      //   setActiveIndex(index + 1)
      // }
    }
  }

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const numbers = e?.clipboardData?.getData("text")
      if (numbers) {
        const numbersArray = numbers.split("")
        const slice = numbersArray.slice(0, NUMBER_OF_INPUTS)
        if (slice.every((number) => !isNaN(Number(number)))) {
          setInputValues(slice)
        }
      }
    }
    window.addEventListener("paste", handlePaste)
    return () => {
      window.removeEventListener("paste", handlePaste)
    }
  }, [])

  return (
    <Modal show={true}>
      <Modal.Body>
        <form>
          <div className="text-center text-2xl">Please Verify Your Phone Number</div>
          <p className="text-center">Enter the code we sent to your email address to verify your phone number:</p>
          <div>
            <div className="flex-center my-4 w-full">
              <div className="flex gap-4">
                {Array.from({ length: NUMBER_OF_INPUTS }).map((_, index) => (
                  <input
                    key={index}
                    className="size-[50px] rounded-sm border border-gray-300 text-center"
                    type="text"
                    onChange={(e) => handleOnchange(e, index)}
                    maxLength={1}
                    value={inputValues[index]}
                    // autoFocus={activeIndex === index}
                  />
                ))}
              </div>
            </div>
            <div className="flex-center my-4">
              <button>Didn&apos;t get the otp Resend</button>
            </div>
            <div className="flex-center">
              <button className="rounded-sm bg-red-400 px-4 py-2 hover:bg-slate-400" type="button">
                Verify & Continue
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalPhoneVerification
