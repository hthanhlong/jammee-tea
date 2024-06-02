import { create } from "zustand"
import { Product } from "entities/Product"

export type SelectProductActions = {
  selectProduct: (product: Product) => void
  updateProduct: (key: string, value: unknown) => void
}

export type SelectProductStore = {
  product: Product
  selectProduct: (product: Product) => void
  updateProduct: (key: string, value: unknown) => void
}

export const initSelectedProductStore = (): Product => ({
  id: "",
  name: "",
  price: 0,
  size: "",
  ice_level: "",
  sugar_level: "",
  extra_topping: "",
  quantity: 1,
  note: "",
})

export const useSelectedProductStore = create<SelectProductStore>((set) => ({
  product: {
    ...initSelectedProductStore(),
  },
  selectProduct: (product: Product) => set({ product: product }),
  updateProduct: (key: string, value: unknown) =>
    set((state) => ({
      product: {
        ...state.product,
        [key]: value,
      },
    })),
}))
