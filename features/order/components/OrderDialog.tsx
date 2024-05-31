import * as Dialog from "@radix-ui/react-dialog"
import React from "react"
import { useSelectedItemStore } from "stores/selected-item-store"
import "./styles.css"

const OrderDialog = () => {
  const { id, name, setSelectedItem } = useSelectedItemStore((state) => state)

  return (
    <Dialog.Root open={!!id}>
      <Dialog.Portal>
        <Dialog.Content
          onPointerDownOutside={() => {
            setSelectedItem({
              id: "",
              name: "",
              price: 0,
            })
          }}
          className="DialogContent"
        >
          <Dialog.Title className="DialogTitle">{name}</Dialog.Title>
          <Dialog.Description className="DialogDescription"></Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              onClick={() => {
                setSelectedItem({
                  id: "",
                  name: "",
                  price: 0,
                })
              }}
              className="IconButton"
              aria-label="Close"
            >
              x{" "}
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default OrderDialog
