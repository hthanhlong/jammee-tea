import Decimal from "decimal.js"
import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { extraToping } from "data"
import { IOrderFormInput } from "interfaces/form"
import { useOrderStore } from "stores/order-store"
import { useSelectedProductStore } from "stores/selected-item-store"
import { defaultValues } from "../data"

const useOrderModal = () => {
  const { product, resetProduct, updateProduct } = useSelectedProductStore((state) => state)
  const { addProductToCart } = useOrderStore((state) => state)

  const { handleSubmit, register, watch, reset } = useForm<IOrderFormInput>({
    defaultValues: defaultValues,
  })

  const _getPriceExtraTopping = useCallback((toppingType: string) => {
    return extraToping.find((topping) => topping.value === toppingType)?.price
  }, [])

  const { size, ice_level, sugar_level, extra_topping, quantity, note } = watch()

  useEffect(() => {
    updateProduct({
      size,
      ice_level,
      sugar_level,
      extra_topping,
      note,
      quantity: Number(quantity),
      price_extra_topping: _getPriceExtraTopping(extra_topping) || 0,
    })
  }, [size, ice_level, sugar_level, extra_topping, quantity, note, updateProduct, _getPriceExtraTopping])

  const handleClose = () => {
    resetProduct()
    reset()
  }

  const onSubmit = () => {
    addProductToCart(product)
    handleClose()
  }

  const totalPrice = new Decimal(product.price).mul(product.quantity).add(product.price_extra_topping)

  return { handleSubmit, register, watch, reset, handleClose, onSubmit, totalPrice, product }
}

export default useOrderModal
