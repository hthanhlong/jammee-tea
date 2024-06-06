import { IProduct } from "./Product"

export interface Order {
  id: string | number
  userId: string
  tip: number
  taxGST: number
  paymentMethod: string
  timePickUp: string
  cart: IProduct[]
}
