import { create } from "zustand"

interface IIsCheckout {
  isCheckout: boolean
}

export interface IIsCheckoutAction {
  setIsCheckout(value: boolean): void
}

export interface IIsCheckoutStore extends IIsCheckout, IIsCheckoutAction {}

export const initIsCheckoutStore = (): IIsCheckout => ({
  isCheckout: false,
})

export const useIsCheckoutStore = create<IIsCheckoutStore>((set) => ({
  ...initIsCheckoutStore(),
  setIsCheckout: (isCheckout: boolean) => set({ isCheckout }),
}))
