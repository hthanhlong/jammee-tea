import clsx from "clsx"
import Decimal from "decimal.js"
import React from "react"
import { IProduct } from "entities/Product"
import { useOrderStore } from "stores/order-store"
import { MAX_QUANTITY_OF_ORDER } from "../data"
import useCheckout from "../hooks/useCheckout"

const OrderSummary = ({ cart }: { cart: IProduct[] }) => {
  const { totalPriceWithoutTip, priceOfTax, tip, finalPrice, totalQuantityOfOrder, paymentMethod } = useCheckout()
  const { decreaseQuantityOfProduct, increaseQuantityOfProduct } = useOrderStore()
  return (
    <>
      <div className="title mb-1 text-sm font-bold">Order summary</div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                <td className="px-6 py-4">x{item.quantity}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">
                  {new Decimal(item.price).mul(item.quantity).add(item.price_extra_topping).toFixed(2)}
                </td>
                <td className="flex gap-2 px-6 py-4 max-sm:flex-col">
                  <button
                    type="button"
                    disabled={totalQuantityOfOrder >= MAX_QUANTITY_OF_ORDER}
                    onClick={() => increaseQuantityOfProduct(item.id as string)}
                    className={clsx("w-full rounded-sm bg-red-200 p-2 transition-all hover:bg-red-300", {
                      "opacity-50 disabled:pointer-events-none": totalQuantityOfOrder >= MAX_QUANTITY_OF_ORDER,
                    })}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => decreaseQuantityOfProduct(item.id as string)}
                    className="w-full rounded-sm bg-red-200 p-2 transition-all hover:bg-red-300"
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col justify-between bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-between text-xs">
            <div>Sub-total</div>
            <div>{totalPriceWithoutTip} $</div>
          </div>
          <div className="flex justify-between text-xs">
            <div>GST 5%</div>
            <div>{priceOfTax} $</div>
          </div>
          <div className="flex justify-between text-xs">
            <div>Tip</div>
            <div>{new Decimal(totalPriceWithoutTip).mul(tip - 1).toFixed(2)} $</div>
          </div>
          <div className="text-md mt-4 flex justify-between border-t-2">
            <div className="text-lg">Total</div>
            <div className="text-lg">{finalPrice} $</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderSummary
