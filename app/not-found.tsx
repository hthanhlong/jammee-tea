import Link from "next/link"
import React from "react"

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-gray-100 text-2xl font-bold uppercase text-gray-900">
      <p>404 Not Found</p>
      <div className="">
        <Link
          className="
            mt-4
            rounded
            bg-blue-500
            px-4
            py-2
            text-white
            transition-colors
            duration-300
            ease-in-out
            hover:bg-blue-600
          "
          href="/"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
