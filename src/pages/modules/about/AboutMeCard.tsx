import ScrambleText from "@/components/ScrambledText"
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaLinkedin,
  FaMapPin,
  FaMobileAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/Fa"
import ContactField from "./ContactField"

export default function AboutMeCard() {
  return (
    <div className="flex flex-col w-full">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="./pfp.png"
        className="w-56 mx-auto mt-8 border-2 rounded-full dark:border-primary-light border-primary-dark"
        alt="Wemerson Queiroz"
      />
      <p className="mt-4 text-2xl font-bold text-center text-black dark:text-white">
        Wemerson Queiroz
      </p>
      <ScrambleText
        text="Frontend Developer"
        className="w-40 p-2 mx-auto mt-2 text-xs text-center text-white rounded homeContainer role bg-primary-dark dark:bg-primary-light dark:text-black "
      />
      <div className="flex gap-2 mx-auto mt-4 ">
        <div className="flex items-center w-8 h-8 p-2 rounded-lg bg-primary-dark hover:bg-primary-hover-dark active:scale-95 dark:bg-primary-light dark:hover:bg-primary-hover-light group">
          <FaTwitter className="drop-shadow-lg text-[#1B9CEA] dark:group-hover:text-black group-hover:text-white" />
        </div>
        <div className="flex items-center w-8 h-8 p-2 rounded-lg bg-primary-dark hover:bg-primary-hover-dark active:scale-95 dark:bg-primary-light dark:hover:bg-primary-hover-light group">
          {" "}
          <FaWhatsapp className="drop-shadow-lg text-xl text-[#2FAA3D] dark:group-hover:text-black group-hover:text-white" />
        </div>
        <div className="flex items-center w-8 h-8 p-2 rounded-lg bg-primary-dark hover:bg-primary-hover-dark active:scale-95 dark:bg-primary-light dark:hover:bg-primary-hover-light group">
          {" "}
          <FaLinkedin className="drop-shadow-lg text-[#1B9CEA] dark:group-hover:text-black group-hover:text-white" />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full gap-2 p-4 mx-auto mt-4 rounded-lg h-fit bg-primary-dark dark:bg-primary-light">
        <ContactField icon={<FaMobileAlt />} title="Phone" hr>
          <ScrambleText
            text="+44 07753410876"
            className="w-full text-xs font-semibold"
          />
        </ContactField>
        <ContactField icon={<FaEnvelopeOpenText />} title="Email" hr>
          {" "}
          <ScrambleText
            text="hi@wemerson.dev"
            className="w-full text-xs font-semibold"
          />
        </ContactField>
        <ContactField icon={<FaMapPin />} title="Location" hr>
          <ScrambleText
            text="London"
            className="w-full text-xs font-semibold"
          />
        </ContactField>
        <ContactField icon={<FaCalendarAlt />} title="Birthday">
          <ScrambleText
            text="May 13, 1989"
            className="w-full text-xs font-semibold"
          />
        </ContactField>
      </div>
    </div>
  )
}
