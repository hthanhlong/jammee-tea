"use client"
import Image from "next/image"
interface ProductItemProps {
  thumbnail: string | unknown
  name: string
  describe: string
  price: number
  alt?: string
  active?: boolean
  id: string
}

const ProductItem = ({ thumbnail, name, describe, price, alt, active, id, ...props }: ProductItemProps) => {
  return (
    <div>
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
