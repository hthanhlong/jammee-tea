"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { mainBanner } from "assets"
import Section from "components/Section/Section"
import Wrapper from "components/Wrapper/Wrapper"
import { MenuItems } from "data"
import { useSelectedItem } from "features/selectedItem/hooks/useSelectedIem"
import SelectedItemProvider from "features/selectedItem/provider"

export default function OnlineOrdering() {
  const ref = useRef(null)

  const { setSelectedItem } = useSelectedItem()

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.toElement.nodeName === "MAIN") {
        setSelectedItem({
          id: "",
        })
      }
    }

    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [setSelectedItem])

  return (
    <SelectedItemProvider>
      <Wrapper>
        <div ref={ref}>
          <div>
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
          </div>
        </div>
      </Wrapper>
    </SelectedItemProvider>
  )
}
