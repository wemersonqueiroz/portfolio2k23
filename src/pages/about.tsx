import { NextPage } from "next"

import AboutMeCard from "./modules/about/AboutMeCard"
import H1 from "@/components/H1"

const about: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <H1 text="About Me" />
      <AboutMeCard />
    </div>
  )
}

export default about
