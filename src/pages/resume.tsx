import H1 from "@/components/H1"
import { NextPage } from "next"
import ResumeSection from "./modules/resume/ResumeSection"

const resume: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <H1 text="Resume" />
      <ResumeSection sectionTitle="Education" />
    </div>
  )
}

export default resume
