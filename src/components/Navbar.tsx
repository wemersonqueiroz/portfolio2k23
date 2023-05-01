import {
  IconDefinition,
  faBriefcase,
  faContactCard,
  faFileAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "./ThemeContext"
import Link from "next/link"
import { useState } from "react"
import { FaMinus, FaMoon, FaPlus, FaSun } from "react-icons/fa"

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const [dropDown, setDropDown] = useState(false)

  const renderDropDownMenuLink = (
    link: string,
    icon: IconDefinition,
    text: string
  ) => {
    return (
      <div className="transition-all duration-1000 group ">
        <Link href={link} legacyBehavior>
          <a
            onClick={() => setDropDown(false)}
            className="flex items-center gap-4 ">
            <FontAwesomeIcon
              className="w-6 h-6 text-white dark:text-black dark:group-hover:text-primary-hover-dark group-hover:text-primary-hover-light"
              icon={icon}
            />
            <p className="text-sm font-bold text-white dark:text-black dark:group-hover:text-primary-hover-dark group-hover:text-primary-hover-light">
              {text}
            </p>
          </a>
        </Link>
      </div>
    )
  }
  const renderDropDownMenu = () => {
    return (
      <div
        className={`absolute left-0 z-10 flex  flex-col w-full gap-5 p-4 bg-background-primary-dark dark:bg-background-primary-light rounded-b-2xl transition-transform duration-300
      ${dropDown ? "" : "-translate-y-full"} `}>
        {renderDropDownMenuLink("/about", faUser, "About")}
        {renderDropDownMenuLink("/resume", faFileAlt, "Resume")}
        {renderDropDownMenuLink("/portfolio", faBriefcase, "Portfolio")}
        {renderDropDownMenuLink("/contact", faContactCard, "Contact")}
      </div>
    )
  }
  return (
    <nav className="fixed z-20 w-full h-16">
      <div className="relative z-20 flex items-center justify-between w-full h-16 p-4 dark:bg-black bg-background-primary-light drop-shadow-xl">
        <Link href={"/"}>
          <p className="text-xl font-black text-black dark:text-white">
            Wemerson.Dev
          </p>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-black transition-all duration-300 ease-linear rounded-full bg-primary-dark hover:bg-primary-hover-light dark:hover:bg-primary-hover-dark text:white dark:hover:text-white dark:bg-primary-light ">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setDropDown(!dropDown)}
            className={` p-2 flex items-center text-lg text-black transition-all duration-300 ease-in-out bg-white rounded-full hover:bg-primary-hover-light dark:hover:bg-primary-hover-dark text:white dark:hover:text-white ${
              dropDown ? "rotate-180" : "rotate-90"
            }`}>
            {dropDown ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
      </div>
      {renderDropDownMenu()}
    </nav>
  )
}

export default Navbar
