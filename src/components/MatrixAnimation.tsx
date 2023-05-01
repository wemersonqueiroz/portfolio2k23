import React, { useEffect, useRef } from "react"
import { useTheme } from "./ThemeContext"

interface MatrixAnimationProps {
  fontSize?: number
  speed?: number
  textColor?: string
  backgroundColor?: string
}

const MatrixAnimation: React.FC<MatrixAnimationProps> = ({
  fontSize = 14,
  speed = 50,
  textColor = "#0F0",
  backgroundColor = "#000",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { darkMode } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = `rgba(0, 0, 0, 0.1)`
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const columns = Math.floor(canvas.width / fontSize)
    const drops = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, 0.1)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`
      ctx.fillStyle = "#0F0"

      drops.forEach((y, x) => {
        const text = String.fromCharCode(Math.random() * 128 + 128)
        ctx.fillText(text, x * fontSize, y * fontSize)

        if (Math.random() > 0.975 || y * fontSize > canvas.height) {
          drops[x] = 0
        }
        drops[x]++
      })
    }

    const intervalId = setInterval(draw, speed)

    return () => {
      clearInterval(intervalId)
    }
  }, [canvasRef, fontSize, speed, textColor, backgroundColor])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 -z-[1] ease-linear " />
  )
}

export default MatrixAnimation
