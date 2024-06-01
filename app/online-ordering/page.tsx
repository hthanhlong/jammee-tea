"use client"
import Image from "next/image"
import { mainBanner } from "assets"
import Section from "components/Section/Section"
import Wrapper from "components/Wrapper/Wrapper"
import { MenuItems } from "data"

export default function OnlineOrdering() {
  return (
    <>
      <Wrapper>
        <div>
          <Image src={mainBanner} alt="main-banner" width={1000} height={100} />
        </div>
        <div className="content">
          {MenuItems.map((menu) => (
            <Section
              key={menu.id}
              title={menu.title}
              description={menu.description}
              itemsRight={menu.itemsRight}
              itemsLeft={menu.itemsLeft}
            />
          ))}
        </div>
      </Wrapper>
    </>
  )
}
