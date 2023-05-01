import { FaGraduationCap, FaSuitcase } from "react-icons/fa"

interface ResumeSectionProps {
  sectionTitle: string
}

const ResumeSection = (props: ResumeSectionProps) => {
  const subSectionEducation = [
    {
      year: "2022",
      title: "JavaScript Essential Training",
      description: "LinkedIn",
    },
    {
      year: "2000",
      title: "Lorem ipsum dolor sit amet",
      description: "University of Oxford",
    },
  ]

  const subSectionWork = [
    {
      year: "May 2022 - Present",
      title: "Frontend Developer",
      description: "ExcaliburFM",
    },
    {
      year: "Mar 2020 - Jun 2021",
      title: "IT Technician",
      description: "NetServe LTD",
    },
    {
      year: "Jan 2010 - Sep 2014",
      title: "Ecommerce Manager ",
      description: "Vitrine Refrigeração",
    },
  ]

  const knowledges = [
    "Typescript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "CSS",
  ]

  return (
    <div className="flex flex-col w-full mt-4">
      <div className="flex items-center gap-2 ">
        <i className="text-3xl text-primary-light drop-shadow-sm">
          <FaGraduationCap />
        </i>
        <h2 className="text-xl font-bold text-white">{props.sectionTitle}</h2>
      </div>
      {subSectionWork.map((subSectionWorkItem, index) => (
        <div
          key={index}
          className="flex flex-col w-full gap-2 p-4 mt-4 text-white border rounded-lg dark:border-primary-light border-primary-dark dark:text-black bg-background-primary-dark dark:bg-background-primary-light">
          <p className="text-xs font-medium text-gray-500">
            {subSectionWorkItem.year}{" "}
          </p>
          <p className="text-xl font-semibold">{subSectionWorkItem.title}</p>

          <p className="text-gray-500">{subSectionWorkItem.description}</p>
        </div>
      ))}
      <div className="flex items-center gap-2 mt-6 ">
        <i className="text-3xl text-primary-light drop-shadow-sm">
          <FaSuitcase />
        </i>
        <h2 className="text-xl font-bold text-black dark:text-white">
          {props.sectionTitle}
        </h2>
      </div>
      {subSectionEducation.map((subSectionEducationItem, index) => (
        <div
          key={index}
          className="flex flex-col w-full gap-2 p-4 mt-4 text-white border rounded-lg dark:border-primary-light border-primary-dark dark:text-black bg-background-primary-dark dark:bg-background-primary-light">
          <p className="text-xs font-medium text-gray-500">
            {subSectionEducationItem.year}{" "}
          </p>
          <p className="text-xl font-semibold">
            {subSectionEducationItem.title}
          </p>

          <p className="text-gray-500">{subSectionEducationItem.description}</p>
        </div>
      ))}
      <div className="flex flex-col w-full gap-2 mt-5">
        <h2 className="text-xl font-bold text-white">Knowledges</h2>
        <div className="flex flex-wrap gap-2">
          {knowledges.map((knowledgeItem, index) => (
            <p
              key={index}
              className="p-2 text-sm text-gray-500 rounded-md bg-background-primary-dark dark:bg-background-primary-light">
              {knowledgeItem}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ResumeSection
