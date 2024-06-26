import React from "react"
import ProductList from "components/ProductList/ProductList"
import { MenuItemChild } from "interfaces/common"

interface SectionProps {
  title: string
  description: string
  itemsRight: MenuItemChild[]
  itemsLeft: MenuItemChild[]
}

const Section = ({ title, description, itemsRight, itemsLeft }: SectionProps) => {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
      <h2 className="text-sm font-semibold text-blue-700">{description}</h2>
      <div className="mt-3 flex justify-between gap-12 max-lg:flex-col">
        <div className="right w-1/2 border-slate-300 max-lg:w-full">
          <ProductList ListItem={itemsRight} />
        </div>
        <div className="left w-1/2 border-slate-300 max-lg:w-full">
          <ProductList ListItem={itemsLeft} />
        </div>
      </div>
    </div>
  )
}

export default Section
