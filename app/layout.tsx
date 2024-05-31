import { Inter } from "next/font/google"
import "../styles/tailwind.css"
import NavBar from "components/Navbar/Navbar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
