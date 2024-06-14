import Link from "next/link"
import React from "react"
import Wrapper from "components/Wrapper/Wrapper"

const CheckoutSuccess = () => {
  return (
    <Wrapper>
      <div className="">
        <div className="page-container">
          <h1>Payment Intent Result</h1>
          <p>Thank you for your purchase!</p>
        </div>
        <Link href="/online-ordering">Back to home</Link>
      </div>
    </Wrapper>
  )
}

export default CheckoutSuccess
