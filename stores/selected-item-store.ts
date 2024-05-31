import { create } from "zustand"

export type SelectedItemState = {
  id: string | number
  name: string
  price: number | string | null
}

export type SelectedItemActions = {
  setSelectedItem: ({ id, name, price }: SelectedItemState) => void
}

export type SelectedItemStore = SelectedItemState & SelectedItemActions

export const initSelectedItemStore = (): SelectedItemState => ({
  id: "",
  name: "",
  price: 0,
})

export const useSelectedItemStore = create<SelectedItemStore>((set) => ({
  ...initSelectedItemStore(),
  setSelectedItem: (newItem: SelectedItemState) => set({ ...newItem }),
}))
