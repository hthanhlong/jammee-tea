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

  const watchQuantity = watch("quantity")
  const watchExtraToppingType = watch("extra_topping")

  const _getPriceExtraTopping = useCallback((toppingType: string) => {
    return extraToping.find((topping) => topping.value === toppingType)?.price
  }, [])

  useEffect(() => {
    updateProduct("quantity", Number(watchQuantity))
  }, [watchQuantity, updateProduct])

  useEffect(() => {
    updateProduct("price_extra_topping", _getPriceExtraTopping(watchExtraToppingType))
  }, [updateProduct, watchExtraToppingType, _getPriceExtraTopping])

  const handleClose = () => {
    resetProduct()
    reset()
  }

  const onSubmit = (data: IOrderFormInput) => {
    addProductToCart({
      ...product,
      ...data,
      quantity: Number(data.quantity as string),
    })
    handleClose()
  }

  const totalPrice = new Decimal(product.price).mul(product.quantity).add(product.price_extra_topping)
  return { handleSubmit, register, watch, reset, watchQuantity, handleClose, onSubmit, totalPrice, product }
}

export default useOrderModal
