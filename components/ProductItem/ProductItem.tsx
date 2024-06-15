"use client"
import Image from "next/image"
import { useSelectedProductStore } from "stores/selected-item-store"
interface ProductItemProps {
  thumbnail: string | unknown
  name: string
  description: string
  price: number
  alt?: string
  active?: boolean
  id: string
}

const ProductItem = ({ thumbnail, name, description, price, alt, id }: ProductItemProps) => {
  const { product, selectProduct } = useSelectedProductStore((state) => state)

  return (
    <div
      onClick={() => {
        selectProduct({
          id,
          name,
          price,
          description,
          size: "regular",
          ice_level: "regular_ice",
          sugar_level: "regular_sugar",
          extra_topping: "no",
          price_extra_topping: 0,
          quantity: 1,
          note: "",
        })
      }}
      className={`my-2 flex w-full cursor-pointer gap-4 border-2 border-red-50 p-2 hover:bg-red-50 ${
        product.id === id && "bg-red-50"
      }`}
    >
      <Image src={(thumbnail as string) || ""} alt={alt || "banner image"} className="size-[60px] max-sm:size-[48px]" />
      <div className="content mr-4">
        <div className="flex justify-between">
          <div>{name}</div>
        </div>
        <div className="text-xs max-sm:text-[10px]">{description || "hello"}</div>
      </div>
      <div className="ml-auto">{price}$</div>
    </div>
  )
}

export default ProductItem
