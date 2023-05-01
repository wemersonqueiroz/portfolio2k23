import { Inter } from "next/font/google"
import { useTheme } from "./ThemeContext"

const inter = Inter({ subsets: ["latin"] })

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper(props: PageWrapperProps) {
  const { darkMode } = useTheme()

  return (
    <div className="z-[2] flex flex-col min-h-screen ">
      <main
        suppressHydrationWarning
        className={`flex-1 flex h-full flex-col items-center justify-between px-4 relative pb-20 mt-20 ${
          inter.className
        } ${darkMode ? "dark" : ""}`}>
        {props.children}
      </main>
    </div>
  )
}
