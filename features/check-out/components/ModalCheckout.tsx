import { Modal } from "flowbite-react"
import React from "react"
import { useIsCheckoutStore } from "stores/is-checkout-store"
import ElementsForm from "./ElementsForm"

const ModalCheckout = () => {
  const { isCheckout, setIsCheckout } = useIsCheckoutStore()

  return (
    <Modal show={isCheckout} onClose={() => setIsCheckout(false)}>
      <Modal.Body>
        <ElementsForm />
      </Modal.Body>
    </Modal>
  )
}

export default ModalCheckout
