import Decimal from "decimal.js"
import { Table } from "flowbite-react"
import React from "react"
import { useOrderStore } from "stores/order-store"

const OrderSummary = () => {
  const { cart } = useOrderStore()

  return (
    <>
      <div className="title mb-1 text-sm font-bold">Order summary</div>
      {cart.length === 0 ? (
        <div className="flex-center h-24 w-full border-2 text-sm">Your cart is empty</div>
      ) : (
        <Table>
          <Table.Head>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Item</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cart.map((item) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={item.id}>
                <Table.Cell>x{item.quantity}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>
                  {new Decimal(item.price).mul(item.quantity).add(item.price_extra_topping).toString()} $
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  )
}

export default OrderSummary
