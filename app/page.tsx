import { Button } from "flowbite-react"

export default function Home() {
  return (
    <div className="flex-center h-full overflow-auto">
      <div className="text-white">
        <div className="text-7xl">Hello</div>
        <div className="text-6xl">Welcome to my store</div>
        <Button href="/online-ordering" className="w-[400px] text-2xl text-black">
          Online ordering
        </Button>
      </div>
    </div>
  )
}
