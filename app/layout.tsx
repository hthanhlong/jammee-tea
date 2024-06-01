import { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/tailwind.css"
import Footer from "components/Footer/Footer"
import NavBar from "components/Navbar/Navbar"

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
