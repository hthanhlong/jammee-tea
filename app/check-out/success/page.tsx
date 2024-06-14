"use client"
import React, { useEffect } from "react"
import Wrapper from "components/Wrapper/Wrapper"

const CheckoutSuccess = () => {
  const [time, setTime] = React.useState(5)

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/online-ordering"
    }, 5000)

    const interval = setInterval(() => {
      setTime((prev) => (prev === 0 ? 0 : prev - 1))
    }, 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Wrapper>
      <div className="flex-center h-full">
        <div className="">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-20 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-2xl">Thank you for your purchase!</p>
          </div>
          <p className="text-2xl">Redirecting to the home page in {time}...</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default CheckoutSuccess
