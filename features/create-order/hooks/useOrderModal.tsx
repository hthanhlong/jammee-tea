import Decimal from "decimal.js"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { IOrderFormInput } from "interfaces/form"
import { useOrderStore } from "stores/order-store"
import { initSelectedProductStore, useSelectedProductStore } from "stores/selected-item-store"
import { defaultValues } from "../data"

const useOrderModal = () => {
  const { selectProduct, product, updateProduct } = useSelectedProductStore((state) => state)
  const { addProductToCart } = useOrderStore((state) => state)

  const { handleSubmit, register, watch, reset } = useForm<IOrderFormInput>({
    defaultValues: defaultValues,
  })
  const watchQuantity = watch("quantity")

  useEffect(() => {
    updateProduct("quantity", Number(watchQuantity))
  }, [watchQuantity, updateProduct])

  const handleClose = () => {
    selectProduct(initSelectedProductStore())
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

  const totalPrice = new Decimal(product.price).mul(product.quantity)

  return { handleSubmit, register, watch, reset, watchQuantity, handleClose, onSubmit, totalPrice, product }
}

export default useOrderModal
