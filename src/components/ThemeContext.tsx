import { createContext, useContext, useState } from "react"

interface ThemeContextProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: true,
  toggleDarkMode: () => {},
})

export const useTheme = () => {
  return useContext(ThemeContext)
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`${darkMode ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
