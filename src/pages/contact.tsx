import H1 from "@/components/H1"
import { NextPage } from "next"
import AnimatedLabelInput from "./modules/contact/AnimatedLabelInput"

const contact: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <H1 text="Contact" />
      <div className="p-4 text-white border rounded-lg dark:border-primary-light border-primary-dark dark:text-black bg-background-primary-dark dark:bg-background-primary-light">
        <p>
          I'm always open to discussing
          <span className="block text-xl font-bold">
            product design work or partnerships.
          </span>
        </p>
        <p className="mt-2 text-sm font-bold text-gray-500">
          All fields required
        </p>
        <form className="flex flex-col items-start w-full mt-8" action="">
          <AnimatedLabelInput label="Name*" htmlFor="name" />
          <AnimatedLabelInput
            label="Email*"
            htmlFor="email"
            inputType={"email"}
          />
          <AnimatedLabelInput
            label="Message*"
            htmlFor="message"
            inputType={"textarea"}
          />

          <button className="flex items-center px-5 py-2 mt-8 text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:text-black dark:text-black dark:bg-primary-light bg-primary-dark dark:hover:bg-primary-hover-dark dark:hover:text-white hover:bg-primary-hover-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default contact
