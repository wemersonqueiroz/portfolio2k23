import H1 from "@/components/H1"
import { NextPage } from "next"
import "react-toastify/dist/ReactToastify.css"
import ContactForm from "./modules/contact/ContactForm"

const contact: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <H1 text="Contact" />
      <ContactForm />
    </div>
  )
}

export default contact
