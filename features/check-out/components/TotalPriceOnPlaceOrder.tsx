import clsx from "clsx"
import React from "react"
import useCheckout from "../hooks/useCheckout"

const TotalPriceOnPlaceOrder = ({ finalPrice, status }: { finalPrice: string; status: string }) => {
  const { userId } = useCheckout()
  return (
    <button
      disabled={!userId || status === "loading"}
      type="submit"
      className={clsx(
        "flex-center mt-auto flex min-h-14 gap-5 bg-red-200 text-xl transition-all hover:bg-orange-400",
        !userId && "opacity-50 disabled:pointer-events-none"
      )}
    >
      {status === "loading" ? (
        "Loading..."
      ) : (
        <>
          <span>Total: {finalPrice} $</span>|<span>Place Order</span>
        </>
      )}
    </button>
  )
}

export default TotalPriceOnPlaceOrder
