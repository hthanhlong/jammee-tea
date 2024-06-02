import { create } from "zustand"
import { Product } from "entities/Product"

export type OrderState = {
  id: string | number
  userOrderId: string
  totalPrice: number
  cart: Product[]
}

export type OrdersAction = {
  addProductToCart: (product: Product) => void
  removeProductFromCart: (id: string | number) => void
  updateProductQuantity: (id: string | number, quantity: number) => void
  clearCart: () => void
}

export type OrderStore = OrderState & OrdersAction

export const initOrderStore = (): OrderState => ({
  id: "",
  totalPrice: 0,
  userOrderId: "",
  cart: [],
})

export const useOrderStore = create<OrderStore>((set) => ({
  ...initOrderStore(),
  addProductToCart: (newItem: Product) => set((state) => ({ cart: [...state.cart, newItem] })),
  removeProductFromCart: (id: string | number) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  updateProductQuantity: (id: string | number, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),
  clearCart: () => set({ cart: [] }),
}))
