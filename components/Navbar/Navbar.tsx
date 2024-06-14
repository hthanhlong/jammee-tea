"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItems } from "../../data"

const NavBar = () => {
  const path = usePathname()

  return (
    <section className="h-[var(--nav-height)] bg-red-200">
      <div className="wrapper">
        <div className="flex size-full items-center justify-between max-lg:px-10">
          <div className="logo">Logo</div>
          <nav>
            <ul className="flex gap-12 font-semibold text-black">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link className={`${path === item.path && "text-red-500"} `} href={`${item.path}`}>
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
