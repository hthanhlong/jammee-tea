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
  describe?: string
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
  data: any[]
}
