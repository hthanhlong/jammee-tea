import { Button } from "flowbite-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex-center h-full overflow-auto">
      <div className="text-white max-lg:px-4">
        <div className="text-7xl">Hello</div>
        <div className="text-6xl">Welcome to my store</div>
        <Link href="/online-ordering" className="w-[400px] text-2xl text-black">
          <Button>Online ordering</Button>
        </Link>
      </div>
    </div>
  )
}
