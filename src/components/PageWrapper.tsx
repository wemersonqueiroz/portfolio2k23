import { Inter } from "next/font/google"
import { useTheme } from "./ThemeContext"

const inter = Inter({ subsets: ["latin"] })

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper(props: PageWrapperProps) {
  const { darkMode } = useTheme()

  return (
    // <div className="z-[2] flex flex-col min-h-screen">
    <main
      suppressHydrationWarning
      className={`flex-1 flex h-screen overflow-y-scroll flex-col items-center justify-between px-4 relative pt-20 pb-40 ${
        inter.className
      } ${darkMode ? "dark" : ""}`}>
      {props.children}
    </main>
    // </div>
  )
}
