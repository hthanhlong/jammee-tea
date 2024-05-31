"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import { NavItems } from "../../data"

const NavBar = () => {
  const path = usePathname()
  const [activeLink, setActiveLink] = useState(path || "/")

  return (
    <section className="h-[var(--nav-height)] bg-red-200">
      <div className="wrapper">
        <div className="flex size-full items-center justify-between">
          <div className="logo">Logo</div>
          <nav>
            <ul className="flex gap-12 font-semibold text-black">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={() => setActiveLink(item.path)}
                    className={`${activeLink === item.path && "text-red-500"} `}
                    href={`${item.path}`}
                  >
                    {item.name}
                  </Link>
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
