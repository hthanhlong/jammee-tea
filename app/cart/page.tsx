"use client"
import Wrapper from "components/Wrapper/Wrapper"
import AvailableTimeForPickup from "features/check-out/components/AvailableTimeForPickup"
import CustomerInformation from "features/check-out/components/CustomerInformation"
import OrderingMethod from "features/check-out/components/OrderingMethod"
import OrderSummary from "features/check-out/components/OrderSummary"
import PaymentMethods from "features/check-out/components/PaymentMethods"
import TotalPrice from "features/check-out/components/TotalPrice"
import { useOrderStore } from "stores/order-store"

export default function Cart() {
  const { cart } = useOrderStore()
  return (
    <Wrapper>
      {cart.length === 0 ? (
        <div className="flex-center h-full">Your cart is empty</div>
      ) : (
        <form className="flex size-full flex-col">
          <div className="mb-2 flex gap-4 overflow-auto p-4">
            <div className="cart_left w-full">
              <CustomerInformation />
              <div className="flex gap-4">
                <OrderingMethod />
                <AvailableTimeForPickup />
              </div>
              <PaymentMethods />
            </div>
            <div className="cart_right w-full">
              <OrderSummary cart={cart} />
            </div>
          </div>
          <TotalPrice />
        </form>
      )}
    </Wrapper>
  )
}
