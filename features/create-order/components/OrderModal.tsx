"use client"
import { Button, Label, Modal, Radio, Textarea, TextInput } from "flowbite-react"
import Image from "next/image"
import { bubleTea } from "assets"
import { dataOrder } from "data"
import useCheckout from "features/check-out/hooks/useCheckout"
import { DataOrderItem } from "interfaces/common"
import { MAX_QUANTITY_OF_ORDER } from "features/check-out/data"
import { IOrderFormInput } from "interfaces/form"
import useOrderModal from "../hooks/useOrderModal"

export function OrderModal() {
  const { handleSubmit, register, handleClose, onSubmit, totalPrice, product, disableTextInput } = useOrderModal()
  const { totalQuantityOfOrder } = useCheckout()

  return (
    <Modal show={!!product.id} onClose={handleClose}>
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Body>
        <div className="flex gap-4">
          <Image src={bubleTea} alt={product.name} width={60} height={60} />
          <div className="">
            <Label className="text-sm">{product.name}</Label>
            <p className="text-sm">{product.description}</p>
          </div>
        </div>
        <form>
          {dataOrder.map((item) => {
            return (
              <div className="order_form_group" key={item.section}>
                <Label className="text-xl">{item.label}</Label>
                {item.data.map((data: DataOrderItem) => (
                  <div key={data.value} className="my-1 flex items-center gap-2 border p-2">
                    <Radio id={data.value} value={data.value} {...register(item.section as keyof IOrderFormInput)} />
                    <Label htmlFor={data.value}>
                      {data.label}
                      <span>{!!data.price && ` +${data.price}$`}</span>
                    </Label>
                  </div>
                ))}
              </div>
            )
          })}
          <div className="order_form_group">
            <Label className="text-xl">Quantity</Label>
            <TextInput disabled={disableTextInput} type="number" min={1} max={30} step={1} {...register("quantity")} />
          </div>
          <div className="order_form_group">
            <Label className="text-xl">Note</Label>
            <Textarea {...register("note")} />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="h-20 p-0">
        <Button
          disabled={totalQuantityOfOrder === MAX_QUANTITY_OF_ORDER}
          onClick={handleSubmit(onSubmit)}
          color="warning"
          className="flex size-full items-center rounded-none text-center"
          type="submit"
        >
          <p className="text-bold text-2xl">ADD TO CART - {totalPrice.toFixed(2)}$</p>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
