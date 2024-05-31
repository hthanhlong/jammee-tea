import Link from "next/link"
import React from "react"
import { NavItems } from "../../data"

const NavBar = () => {
  return (
    <section className="h-[var(--nav-height)] bg-red-200">
      <div className="wrapper">
        <div className="flex size-full items-center justify-between">
          <div className="logo">Logo</div>
          <nav>
            <ul className="flex gap-12 font-semibold text-black">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link href={`${item.path}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default NavBar
