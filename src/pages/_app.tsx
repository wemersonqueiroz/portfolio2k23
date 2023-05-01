import MatrixAnimation from "@/components/MatrixAnimation"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import { ThemeProvider } from "@/components/ThemeContext"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <MatrixAnimation />
    </ThemeProvider>
  )
}
