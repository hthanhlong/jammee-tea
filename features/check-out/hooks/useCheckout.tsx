import Decimal from "decimal.js"
import { useOrderStore } from "stores/order-store"

const useCheckout = () => {
  const { cart, tip, paymentMethod, addTip, setPaymentMethod, taxGST, userId } = useOrderStore()

  const totalPriceWithoutTip = cart
    .reduce((acc, item) => {
      return new Decimal(acc).add(new Decimal(item.price).mul(item.quantity).add(item.price_extra_topping))
    }, new Decimal(0))
    .toFixed(2)

  const totalPriceWithTip = new Decimal(totalPriceWithoutTip).mul(tip).toFixed(2)

  const priceOfTax = new Decimal(totalPriceWithoutTip).mul(taxGST).toFixed(2)

  const finalPrice = new Decimal(totalPriceWithTip).add(priceOfTax).toFixed(2)

  const totalQuantityOfOrder = cart.reduce((acc, item) => acc + item.quantity, 0)

  return {
    totalPriceWithoutTip,
    totalPriceWithTip,
    tip,
    paymentMethod,
    priceOfTax,
    finalPrice,
    totalQuantityOfOrder,
    userId,
    setPaymentMethod,
    addTip,
  }
}

export default useCheckout
