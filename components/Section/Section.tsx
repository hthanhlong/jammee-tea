import Image from "next/image"
import React from "react"
import { MenuItemChild } from "types"
import ProductItem from "../ProductItem/ProductItem"

interface SectionProps {
  title: string
  description: string
  itemsRight: MenuItemChild[]
  itemsLeft: MenuItemChild[]
}

const Section = ({ title, description, itemsRight, itemsLeft }: SectionProps) => {
  return (
    <>
      <div className="my-8">
        <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
        <h2 className="text-sm font-semibold text-blue-700">{description}</h2>
        <div className="mt-3 flex justify-between gap-12">
          <div className="right w-1/2 border-t border-slate-300 ">
            {itemsRight?.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                thumbnail={item.thumbnail || ""}
                name={item.name}
                describe={item.describe || ""}
                price={item.price || 0}
                alt={item.alt || ""}
              />
            ))}
          </div>
          <div className="left w-1/2 border-t border-slate-300 ">
            {itemsLeft?.map((item, index) => (
              <div key={index}>
                {item.type === "banner" ? (
                  <Image src={(item.url as string) || ""} alt={item.alt || "banner image"} width={1000} height={100} />
                ) : (
                  <ProductItem
                    id={item.id}
                    key={index}
                    thumbnail={item.thumbnail || ""}
                    name={item.name}
                    describe={item.describe || ""}
                    price={item.price || 0}
                    alt={item.alt || ""}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
