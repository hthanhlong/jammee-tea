"use client"
import Decimal from "decimal.js"
import { Button, Label, Modal, Radio, Textarea, TextInput } from "flowbite-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { dataOrder } from "data"
import { useOrderStore } from "stores/order-store"
import { initSelectedProductStore, useSelectedProductStore } from "stores/selected-item-store"

interface IFormInput {
  size: string
  ice_level: string
  sugar_level: string
  extra_topping: string
  quantity: string | number
  note: string
}

export function OrderModal() {
  const { selectProduct, product, updateProduct } = useSelectedProductStore((state) => state)
  const { addProductToCart } = useOrderStore((state) => state)

  const { handleSubmit, register, watch, reset } = useForm({
    defaultValues: {
      size: "large",
      ice_level: "regular_ice",
      sugar_level: "regular_sugar",
      extra_topping: "no",
      quantity: 1,
      note: "",
    },
  })
  const watchQuantity = watch("quantity")

  useEffect(() => {
    updateProduct("quantity", Number(watchQuantity))
  }, [watchQuantity, updateProduct])

  const handleClose = () => {
    selectProduct(initSelectedProductStore())
    reset()
  }

  const onSubmit = (data: IFormInput) => {
    addProductToCart({
      ...product,
      ...data,
      quantity: Number(data.quantity as string),
    })
    handleClose()
  }

  const totalPrice = new Decimal(product.price).mul(product.quantity)

  return (
    <Modal show={!!product.id} onClose={handleClose}>
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Body>
        <form>
          {dataOrder.map((item) => {
            return (
              <div className="order_form_group" key={item.section}>
                <Label className="text-xl">{item.label}</Label>
                {item.data.map((data) => (
                  <div key={data.value} className="my-1 flex items-center gap-2 border p-2">
                    <Radio id={data.value} value={data.value} {...register(item.section as keyof IFormInput)} />
                    <Label htmlFor={data.value}>
                      {data.label}
                      <span>{data.price && ` - ${data.price}`}</span>
                    </Label>
                  </div>
                ))}
              </div>
            )
          })}
          <div className="order_form_group">
            <Label className="text-xl">Quantity</Label>
            <TextInput type="number" min={1} max={20} step={1} {...register("quantity")} />
          </div>
          <div className="order_form_group">
            <Label className="text-xl">Note</Label>
            <Textarea {...register("note")} />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="h-20 p-0">
        <Button
          onClick={handleSubmit(onSubmit)}
          color="warning"
          className="flex size-full items-center rounded-none text-center"
          type="submit"
        >
          <p className="text-bold text-2xl">ADD TO CART - {totalPrice.toString()}$</p>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
