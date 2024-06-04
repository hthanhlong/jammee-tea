import { IProduct } from "./Product"

export interface Order {
  id: string | number
  userOrderId: string
  tip: number
  taxGST: number
  paymentMethod: string
  cart: IProduct[]
}
