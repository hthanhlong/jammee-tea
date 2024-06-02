"use client"

import { Button, Modal } from "flowbite-react"
import { useSelectedItemStore } from "stores/selected-item-store"
import OrderForm from "./OrderForm"

export function OrderModal() {
  const { id, name, price, setSelectedItem } = useSelectedItemStore((state) => state)

  const handleClose = () => {
    setSelectedItem({
      id: "",
      name: "",
      price: 0,
    })
  }

  return (
    <Modal show={!!id} onClose={handleClose}>
      <Modal.Header>{name}</Modal.Header>
      <Modal.Body>
        <OrderForm />
      </Modal.Body>
      <Modal.Footer className="h-20 p-0">
        <Button color="warning" className="flex size-full items-center rounded-none text-center" onClick={handleClose}>
          <p className="text-bold text-2xl">ADD TO CART - {price}$</p>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
