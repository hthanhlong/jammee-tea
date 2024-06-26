"use client"
import { Modal } from "flowbite-react"
import React, { useEffect, useState } from "react"
import { useOrderStore } from "stores/order-store"
import { NUMBER_OF_INPUTS } from "../data"
import useAuth from "../hooks/useAuth"

const ModalPhoneVerification = ({
  isOpen,
  onSetIsModalOpen,
}: {
  isOpen: boolean
  onSetIsModalOpen: (value: boolean) => void
}) => {
  const { updateUserId } = useOrderStore()
  const [inputValues, setInputValues] = useState<string[]>(Array(NUMBER_OF_INPUTS).fill("1"))
  const [focusIndex, setFocusIndex] = useState<number>(0)
  const { setIsDisabledVerification } = useAuth()

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target
    if (value) {
      if (isNaN(Number(value))) return // only allow numbers
      setInputValues((prev) => {
        const updatedValues = [...prev]
        updatedValues[index] = value
        return updatedValues
      })
      setFocusIndex((prev) => (prev === NUMBER_OF_INPUTS - 1 ? prev : prev + 1))
    }
  }

  const handleCloseModal = () => {
    setInputValues(Array(NUMBER_OF_INPUTS).fill(""))
    setFocusIndex(0)
    setIsDisabledVerification(true)
    updateUserId("123")
    onSetIsModalOpen(false)
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setInputValues((prev) => {
          const updatedValues = [...prev]
          if (updatedValues[focusIndex] !== "") {
            updatedValues[focusIndex] = ""
          }
          return updatedValues
        })
        setFocusIndex((prev) => {
          if (prev === 0) return prev
          return prev - 1
        })
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [inputValues, focusIndex])

  useEffect(() => {
    document.getElementById(`otp-${focusIndex}`)?.focus()
  }, [focusIndex])

  return (
    <Modal show={isOpen}>
      <Modal.Body>
        <form id="verify phone">
          <div className="text-center text-2xl">Please Verify Your Phone Number</div>
          <p className="text-center">Enter the code we sent to your email address to verify your phone number:</p>
          <div>
            <div className="flex-center my-4 w-full">
              <div className="flex gap-4">
                {Array.from({ length: NUMBER_OF_INPUTS }).map((_, index) => (
                  <input
                    onClick={() => setFocusIndex(index)}
                    id={`otp-${index}`}
                    key={index}
                    className="size-[40px] rounded-sm border border-gray-300 text-center"
                    type="text"
                    onChange={(e) => handleOnchange(e, index)}
                    maxLength={1}
                    value={inputValues[index]}
                  />
                ))}
              </div>
            </div>
            <div className="flex-center my-4">
              <button>Didn&apos;t get the otp Resend</button>
            </div>
            <div className="flex-center">
              <button
                onClick={handleCloseModal}
                className="rounded-sm bg-red-400 px-4 py-2 hover:bg-red-300"
                type="button"
              >
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
