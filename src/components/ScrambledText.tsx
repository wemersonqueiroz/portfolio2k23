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
          if (nameRef.current) {
            nameRef.current.innerText = nameRef.current.innerText
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return nameRef.current?.dataset.value
                    ? nameRef.current.dataset.value[index]
                    : ""
                }

                return letters[Math.floor(Math.random() * 26)]
              })
              .join("")
          }

          if (
            nameRef.current &&
            nameRef.current.dataset.value &&
            iteration >= nameRef.current.dataset.value.length
          ) {
            clearInterval(interval)
          }

          iteration += 1 / 3
        }, 30)
      }

      if (nameRef.current) {
        nameRef.current.addEventListener("mouseenter", handleMouseEnter)
      }

      return () => {
        if (nameRef.current) {
          nameRef.current.removeEventListener("mouseenter", handleMouseEnter)
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
