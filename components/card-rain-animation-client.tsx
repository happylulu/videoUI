"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const cardData = [
  { id: 1, title: "3D Animation", color: "#FF4757", delay: 0 },
  { id: 2, title: "Motion Graphics", color: "#2ED573", delay: 0.4 },
  { id: 3, title: "AI Generation", color: "#3742FA", delay: 0.8 },
  { id: 4, title: "Visual Effects", color: "#FF6348", delay: 1.2 },
  { id: 5, title: "Character Design", color: "#FFA502", delay: 1.6 },
  { id: 6, title: "Explainer Videos", color: "#A55EEA", delay: 2.0 },
]

type AnimationPhase = "rain" | "stack" | "fan" | "close" | "row" | "drop"

export default function CardRainAnimationClient() {
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>("rain")
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    // Animation sequence
    const timers = [
      setTimeout(() => setAnimationPhase("stack"), 4000),
      setTimeout(() => setAnimationPhase("fan"), 5500),
      setTimeout(() => setAnimationPhase("close"), 8000),
      setTimeout(() => setAnimationPhase("row"), 9500),
      setTimeout(() => setAnimationPhase("drop"), 11500),
    ]

    return () => {
      window.removeEventListener("resize", handleResize)
      timers.forEach(clearTimeout)
    }
  }, [])

  const getCardPosition = (index: number, phase: AnimationPhase) => {
    const centerX = dimensions.width / 2 - 125
    const centerY = dimensions.height / 2 - 175
    const totalCards = cardData.length

    switch (phase) {
      case "rain":
        return { x: centerX, y: centerY + 50, rotate: 0, scale: 1, opacity: 1 }

      case "stack":
        return { x: centerX, y: centerY, rotate: index * 3 - 7.5, scale: 1, opacity: 1 }

      case "fan":
        const maxFanAngle = 120
        const startAngle = -maxFanAngle / 2
        const angleStep = maxFanAngle / (totalCards - 1)
        const cardAngle = startAngle + index * angleStep
        const fanRadius = Math.min(350, dimensions.width * 0.3)
        const cardX = centerX + Math.sin((cardAngle * Math.PI) / 180) * fanRadius
        const cardY = centerY - 50 - Math.cos((cardAngle * Math.PI) / 180) * fanRadius * 0.25
        return { x: cardX, y: cardY, rotate: cardAngle, scale: 1, opacity: 1 }

      case "close":
        return { x: centerX, y: centerY, rotate: 0, scale: 1, opacity: 1 }

      case "row":
        const rowSpacing = Math.min(180, (dimensions.width / totalCards) * 0.8)
        const totalWidth = (totalCards - 1) * rowSpacing
        const startX = centerX - totalWidth / 2
        const rowX = startX + index * rowSpacing
        return { x: rowX, y: centerY + 100, rotate: 0, scale: 0.6, opacity: 1 }

      case "drop":
        const dropSpacing = Math.min(180, (dimensions.width / totalCards) * 0.8)
        const dropTotalWidth = (totalCards - 1) * dropSpacing
        const dropStartX = centerX - dropTotalWidth / 2
        const dropX = dropStartX + index * dropSpacing
        const dropRotation = ((index * 17 - 34) % 40) - 20
        return { x: dropX, y: dimensions.height + 200, rotate: dropRotation, scale: 0.6, opacity: 0 }

      default:
        return { x: centerX, y: centerY, rotate: 0, scale: 1, opacity: 1 }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <AnimatePresence>
        {cardData.map((card, index) => {
          const position = getCardPosition(index, animationPhase)

          return (
            <motion.div
              key={card.id}
              className="absolute"
              initial={{ x: position.x, y: -400, rotate: 0, scale: 1, opacity: 1 }}
              animate={{
                x: position.x,
                y: position.y,
                rotate: position.rotate,
                scale: position.scale,
                opacity: position.opacity,
              }}
              transition={{
                delay: animationPhase === "rain" ? card.delay : 0.1 * index,
                duration: animationPhase === "drop" ? 1.5 : 1.2,
                ease: animationPhase === "drop" ? [0.25, 0.46, 0.45, 0.94] : "easeOut",
                type: animationPhase === "fan" ? "spring" : "tween",
                damping: 20,
                stiffness: 120,
              }}
              style={{
                width: "250px",
                height: "350px",
                transformOrigin: "center bottom",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)`,
                  borderRadius: "12px",
                  boxShadow: "0 30px 100px rgba(0,0,0,0.4), 0 15px 40px rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid rgba(255,255,255,0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "60%",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
                  }}
                />
                <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: "700",
                      color: "white",
                      textShadow: "0 4px 8px rgba(0,0,0,0.6)",
                      marginBottom: "16px",
                      lineHeight: "1.3",
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "3px",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      margin: "0 auto",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "30%",
                    background: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 100%)",
                  }}
                />
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
