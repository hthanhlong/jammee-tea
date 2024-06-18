"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useOrderStore } from "stores/order-store"
import { NavItems } from "../../data"

const NavBar = () => {
  const path = usePathname()
  const { cart } = useOrderStore()

  return (
    <section className="h-[var(--nav-height)] bg-red-200">
      <div className="wrapper">
        <div className="flex size-full items-center justify-between max-lg:px-10">
          <div className="logo">
            <Link href="/">
              <h1 className="text-lg font-bold text-black">Jammee</h1>
            </Link>
          </div>
          <nav>
            <ul className="flex items-center gap-12 font-semibold text-black max-sm:gap-3 max-sm:text-xs">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link className={`${path === item.path && "text-red-500"} `} href={`${item.path}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link className={`${path === "/cart" && "text-red-500"} `} href="/cart">
                  <span className="relative inline-block">
                    <svg
                      className="size-8 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                      />
                    </svg>
                    {cart.length > 0 && (
                      <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                        {cart.length}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default NavBar
