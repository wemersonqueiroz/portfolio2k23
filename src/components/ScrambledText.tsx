import { useState, useEffect, useRef } from "react"

interface ScrambleTextProps {
  text: string
  className?: string
}

export default function ScrambleText(props: ScrambleTextProps) {
  const nameRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const letters: string = "x$#tLdHmzKvI@yQsEo%FbGcUa&Rj"

      let interval: number | undefined = undefined

      const handleMouseEnter = () => {
        let iteration = 0

        if (interval !== undefined) {
          clearInterval(interval)
        }

        interval = window.setInterval(() => {
          const currentNameRef = nameRef.current // Store the current value in a variable
          if (currentNameRef) {
            currentNameRef.innerText = currentNameRef.innerText
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return currentNameRef.dataset.value
                    ? currentNameRef.dataset.value[index]
                    : ""
                }

                return letters[Math.floor(Math.random() * 26)]
              })
              .join("")
          }

          if (
            currentNameRef &&
            currentNameRef.dataset.value &&
            iteration >= currentNameRef.dataset.value.length
          ) {
            clearInterval(interval)
          }

          iteration += 1 / 3
        }, 30)
      }

      const initialNameRef = nameRef.current // Store the initial value in a variable

      if (initialNameRef) {
        initialNameRef.addEventListener("mouseenter", handleMouseEnter)
      }

      return () => {
        if (initialNameRef) {
          initialNameRef.removeEventListener("mouseenter", handleMouseEnter) // Use the stored initial value in the cleanup function
        }
        if (interval) {
          clearInterval(interval)
        }
      }
    }
  }, [])

  return (
    <p ref={nameRef} data-value={props.text} className={` ${props.className}`}>
      {props.text}
    </p>
  )
}
