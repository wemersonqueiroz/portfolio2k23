import H1 from "@/components/H1"
import { NextPage } from "next"
import AnimatedLabelInput from "./modules/contact/AnimatedLabelInput"
import { useState } from "react"
import handler from "./api/send-email"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success("Thanks for contacting me! I'll reply ASAP!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error("Error sending email.")
      }
    } catch (error) {
      console.error(error)
      toast.error("Error sending email.")
    }
  }

  return (
    <div className="flex flex-col w-full">
      <H1 text="Contact" />
      <div className="p-4 text-white border rounded-lg dark:border-primary-light border-primary-dark dark:text-black bg-background-primary-dark dark:bg-background-primary-light">
        <p>
          I&apos;m always open to discussing
          <span className="block text-xl font-bold">
            product design work or partnerships.
          </span>
        </p>
        <p className="mt-2 text-sm font-bold text-gray-500">
          All fields required
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-full mt-8"
          action="">
          <AnimatedLabelInput
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            label="Name*"
            htmlFor="name"
          />
          <AnimatedLabelInput
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            label="Email*"
            htmlFor="email"
            inputType={"email"}
          />
          <AnimatedLabelInput
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            label="Message*"
            htmlFor="message"
          />

          <button className="flex items-center px-5 py-2 mt-8 text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:text-black dark:text-black dark:bg-primary-light bg-primary-dark dark:hover:bg-primary-hover-dark dark:hover:text-white hover:bg-primary-hover-dark">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default contact
