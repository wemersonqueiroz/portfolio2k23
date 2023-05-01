import React, { useState } from "react"

interface AnimatedLabelInputProps {
  label: string
  htmlFor?: string
  children?: React.ReactNode
  inputType?: string
  rows?: number
}

const AnimatedLabelInput = (props: AnimatedLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className="relative w-full mt-4">
      {props.inputType === "textarea" ? (
        <>
          {" "}
          <textarea
            autoComplete="off"
            rows={isFocused ? 4 : 1}
            id={props.htmlFor}
            className={`w-full p-2 resize-none border-b-2 focus:outline-none bg-transparent appearance-none
        ${
          isFocused
            ? "border-primary-dark dark:border-primary-light"
            : "border-background-primary-light dark:border-background-primary-dark"
        }`}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </>
      ) : (
        <>
          <input
            type={props.inputType || "text"}
            id={props.htmlFor}
            autoComplete="off"
            className={`w-full p-2 border-b-2 focus:outline-none bg-transparent appearance-none

        ${
          isFocused
            ? "border-primary-dark dark:border-primary-light"
            : "border-background-primary-light dark:border-background-primary-dark"
        }`}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </>
      )}

      <label
        htmlFor={props.htmlFor}
        className={`absolute left-0  w-full ${
          isFocused
            ? "-top-2 text-xs text-primary-dark dark:text-primary-light"
            : "top-1/2 -translate-y-1/2 text-gray-500"
        } transition-all duration-300`}>
        {props.label}
      </label>
    </div>
  )
}

export default AnimatedLabelInput
