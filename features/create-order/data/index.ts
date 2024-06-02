import { IOrderFormInput } from "interfaces/form"

export const defaultValues: IOrderFormInput = {
  size: "large",
  ice_level: "regular_ice",
  sugar_level: "regular_sugar",
  extra_topping: "no",
  quantity: 1,
  note: "",
}
