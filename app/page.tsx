import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Jammee Store",
  description: "Happy shopping!",
}

export default function Home() {
  return (
    <div className="flex-center h-full overflow-auto">
      <div className="text-white">
        <div className="text-7xl">Hello</div>
        <div className="text-6xl">Welcome to my store</div>
        <Button href="/online-ordering" className="w-[400px] text-2xl"></Button>
      </div>
    </div>
  )
}
