import { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "components/Footer/Footer"
import NavBar from "components/Navbar/Navbar"
import "../styles/tailwind.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jammee Store - Home page",
  description: "Happy shopping!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="max-lg:p-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
