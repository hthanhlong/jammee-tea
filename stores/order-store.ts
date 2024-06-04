import { create } from "zustand"
import { IProduct } from "entities/Product"

export interface IOrderState {
  id: string | number
  userOrderId: string
  totalPriceWithoutTip: number
  tip: number
  cart: IProduct[]
}

export interface IOrdersAction {
  updateTotalPriceWithoutTip: (totalPrice: number) => void
  addTip: (tip: number) => void
  addProductToCart: (product: IProduct) => void
  removeProductFromCart: (id: string | number) => void
  updateProductQuantity: (id: string | number, quantity: number) => void
  clearCart: () => void
}

export interface IOrderStore extends IOrderState, IOrdersAction {}

export const initOrderStore = (): IOrderState => ({
  id: "",
  totalPriceWithoutTip: 0,
  userOrderId: "",
  tip: 0,
  cart: [],
})

export const useOrderStore = create<IOrderStore>((set) => ({
  ...initOrderStore(),
  updateTotalPriceWithoutTip: (totalPriceWithoutTip: number) => set({ totalPriceWithoutTip }),
  addTip: (tip: number) => set({ tip }),
  addProductToCart: (newItem: IProduct) => set((state) => ({ cart: [...state.cart, newItem] })),
  removeProductFromCart: (id: string | number) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  updateProductQuantity: (id: string | number, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),
  clearCart: () => set({ cart: [] }),
}))
