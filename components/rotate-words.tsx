"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string
  words: string[]
}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div
      className="heading-1"
      style={{
        fontSize: "inherit",
        textShadow: "inherit",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        lineHeight: "inherit",
        whiteSpace: "nowrap",
        minWidth: "200px", // Reserve space for longest word
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          style={{
            color: "var(--color-text-secondary)",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
