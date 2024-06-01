"use client"
import Image from "next/image"
import { useSelectedItemStore } from "stores/selected-item-store"
interface ProductItemProps {
  thumbnail: string | unknown
  name: string
  describe: string
  price: number
  alt?: string
  active?: boolean
  id: string
}

const ProductItem = ({ thumbnail, name, describe, price, alt, id }: ProductItemProps) => {
  const { id: selectedId, setSelectedItem } = useSelectedItemStore((state) => state)

  let active = selectedId === id

  return (
    <div
      onClick={() => {
        setSelectedItem({
          id,
          name,
          price,
        })
      }}
      className={`my-2 flex cursor-pointer gap-4 border-2 border-red-50 p-2 hover:bg-red-50 ${active && "bg-red-50"}`}
    >
      <Image src={(thumbnail as string) || ""} alt={alt || "banner image"} width={60} height={60} />
      <div className="content">
        <div className="flex justify-between">
          <div>{name}</div>
        </div>
        <div className="text-xs">{describe || "hello"}</div>
      </div>
      <div>{price}</div>
    </div>
  )
}

export default ProductItem
