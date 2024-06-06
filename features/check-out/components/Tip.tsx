import clsx from "clsx"
import Decimal from "decimal.js"
import React from "react"
import { tips } from "../data"
import useCheckout from "../hooks/useCheckout"

const Tip = () => {
  const { addTip, tip, totalPriceWithoutTip } = useCheckout()

  return (
    <div className="my-4">
      <div className="title mb-1 text-sm font-bold">Tip</div>
      <div className="flex gap-2">
        {tips.map((t) => (
          <button
            key={t.label}
            type="button"
            className={clsx("w-full rounded-md bg-slate-200 p-2 text-center", {
              "!bg-red-300": tip === t.value,
            })}
            onClick={() => addTip(t.value)}
          >
            {t.label}
            <div className="text-xs">
              &#10088;{new Decimal(totalPriceWithoutTip).mul(t.value - 1).toFixed(2)} $ &#10089;
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tip
