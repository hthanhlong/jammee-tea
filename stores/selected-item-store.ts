import { create } from "zustand"
import { IProduct } from "entities/Product"

export interface ISelectProductActions {
  selectProduct: (product: IProduct) => void
  updateProduct: (key: string, value: unknown) => void
  resetProduct: () => void
}

export interface ISelectProductStore {
  product: IProduct
  selectProduct: (product: IProduct) => void
  updateProduct: (key: string, value: unknown) => void
  resetProduct: () => void
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
  updateProduct: (key: string, value: unknown) =>
    set((state) => ({
      product: {
        ...state.product,
        [key]: value,
      },
    })),
  resetProduct: () => set({ product: initSelectedProductStore() }),
}))
