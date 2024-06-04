import { create } from "zustand"
import { Order } from "entities/Order"
import { IProduct } from "entities/Product"

export interface IOrdersAction {
  addTip: (tip: number) => void
  decreaseQuantityOfProduct: (id: string) => void
  increaseQuantityOfProduct: (id: string) => void
  addProductToCart: (product: IProduct) => void
  setPaymentMethod: (paymentMethod: string) => void
  updateProductQuantity: (id: string | number, quantity: number) => void
  clearOrder: () => void
}

export interface IOrderStore extends Order, IOrdersAction {}

export const initOrderStore = (): Order => ({
  id: "",
  userOrderId: "",
  taxGST: 0.05,
  tip: 1,
  paymentMethod: "in-person",
  cart: [],
})

export const useOrderStore = create<IOrderStore>((set) => ({
  ...initOrderStore(),
  addTip: (tip: number) => set({ tip }),
  decreaseQuantityOfProduct: (id: string) =>
    set((state) => {
      const item = state.cart.find((item) => item.id === id)
      if (item && item.quantity > 1) {
        return {
          cart: state.cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)),
        }
      }
      return { cart: state.cart.filter((item) => item.id !== id) }
    }),
  increaseQuantityOfProduct: (id: string) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    })),
  setPaymentMethod: (paymentMethod: string) => set({ paymentMethod }),
  addProductToCart: (newItem: IProduct) =>
    set((state) => {
      const isExist = state.cart.some((item) => item.id === newItem.id)
      if (isExist) {
        return {
          cart: state.cart.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)),
        }
      }
      return { cart: [...state.cart, { ...newItem }] }
    }),
  updateProductQuantity: (id: string | number, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),
  clearOrder: () => set(initOrderStore()),
}))
