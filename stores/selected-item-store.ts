import { create } from "zustand"
import { IProduct } from "entities/Product"
import { IOrderFormInput } from "interfaces/form"

interface IUpdateProduct extends IOrderFormInput {
  price_extra_topping: number
}

export interface ISelectProductActions {
  selectProduct: (product: IProduct) => void
  updateProduct: (product: IUpdateProduct) => void
  resetProduct: () => void
}

export interface ISelectProductStore extends ISelectProductActions {
  product: IProduct
}

export const initSelectedProductStore = (): IProduct => ({
  id: "",
  name: "",
  description: "",
  price: 0,
  size: "",
  ice_level: "",
  sugar_level: "",
  extra_topping: "",
  price_extra_topping: 0,
  quantity: 1,
  note: "",
})

export const useSelectedProductStore = create<ISelectProductStore>((set) => ({
  product: {
    ...initSelectedProductStore(),
  },
  selectProduct: (product: IProduct) => set({ product }),
  updateProduct: (product: IUpdateProduct) => set((state) => ({ product: { ...state.product, ...product } })),
  resetProduct: () => set({ product: initSelectedProductStore() }),
}))
