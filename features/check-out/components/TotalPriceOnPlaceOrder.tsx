import clsx from "clsx"
import React from "react"
import { useIsCheckoutStore } from "stores/is-checkout-store"
import useCheckout from "../hooks/useCheckout"

const TotalPriceOnPlaceOrder = () => {
  const { finalPrice, userId } = useCheckout()
  const { setIsCheckout } = useIsCheckoutStore()
  return (
    <button
      disabled={!userId}
      className={clsx(
        "flex-center mt-auto flex min-h-14 gap-5 bg-red-200 text-xl transition-all hover:bg-orange-400",
        !userId && "opacity-50 disabled:pointer-events-none"
      )}
      onClick={() => setIsCheckout(true)}
    >
      Place Order
      <span>Total: {finalPrice} $</span>|<span>Place Order</span>
    </button>
  )
}

export default TotalPriceOnPlaceOrder
