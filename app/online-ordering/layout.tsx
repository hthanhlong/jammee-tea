import { Metadata } from "next"
import "../../styles/tailwind.css"

export const metadata: Metadata = {
  title: "Jammee Store - Online Ordering",
  description: "Happy shopping!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="h-full">{children}</div>
}
