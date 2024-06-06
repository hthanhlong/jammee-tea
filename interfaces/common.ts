export interface MenuItem {
  id: number
  title: string
  description: string
  itemsRight: MenuItemChild[]
  itemsLeft: MenuItemChild[]
}

export interface MenuItemChild {
  id: string
  type: "item" | "banner"
  thumbnail?: string | unknown
  name: string
  description?: string
  price?: number
  alt?: string
  url?: string | unknown
}

export interface DataFooter {
  id: string
  title: string
  data: any
}

export interface DataOrder {
  section: string
  label: string
  data: DataOrderItem[]
}

export interface DataOrderItem {
  value: string
  label: string
  price?: number
}

export interface TimePickUp {
  startHour: number
  startMinute: number
  value: string
  label: string
}
