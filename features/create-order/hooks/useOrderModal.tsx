import Decimal from "decimal.js"
import { useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { extraToping } from "data"
import { MAX_QUANTITY_OF_ORDER } from "features/check-out/data"
import useCheckout from "features/check-out/hooks/useCheckout"
import { IOrderFormInput } from "interfaces/form"
import { useOrderStore } from "stores/order-store"
import { useSelectedProductStore } from "stores/selected-item-store"
import { defaultValues } from "../data"

const useOrderModal = () => {
  const { product, resetProduct, updateProduct } = useSelectedProductStore((state) => state)
  const { addProductToCart } = useOrderStore((state) => state)
  const { totalQuantityOfOrder } = useCheckout()

  const {
    handleSubmit,
    register,
    watch,
    reset: restForm,
  } = useForm<IOrderFormInput>({
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
    restForm()
  }

  const totalPrice = new Decimal(product.price).mul(product.quantity).add(product.price_extra_topping)
  const disableTextInput = totalQuantityOfOrder + Number(quantity) >= MAX_QUANTITY_OF_ORDER

  return { handleSubmit, register, watch, handleClose, addProductToCart, totalPrice, product, disableTextInput }
}

export default useOrderModal
