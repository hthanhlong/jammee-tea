import Image from "next/image"
import ProductItem from "components/ProductItem/ProductItem"
import { MenuItemChild } from "types"

const ProductList = ({ ListItem }: { ListItem: MenuItemChild[] }) => {
  return (
    <>
      {ListItem?.map((item, index) => (
        <div key={index}>
          {item.type === "banner" ? (
            <Image src={(item.url as string) || ""} alt={item.alt || "banner image"} width={1000} height={100} />
          ) : (
            <ProductItem
              id={item.id}
              key={item.id || index}
              thumbnail={item.thumbnail || ""}
              name={item.name}
              describe={item.describe || ""}
              price={item.price || 0}
              alt={item.alt || ""}
            />
          )}
        </div>
      ))}
    </>
  )
}

export default ProductList
