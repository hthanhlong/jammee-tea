import React from "react"
import useCheckout from "../hooks/useCheckout"

const TotalPrice = () => {
  const { finalPrice } = useCheckout()
  return (
    <button className="flex-center mt-auto flex min-h-14 gap-5 bg-red-200 text-xl transition-all hover:bg-orange-400">
      <span>Total: {finalPrice} $</span>|<span>Place Order</span>
    </button>
  )
}

export default TotalPrice
