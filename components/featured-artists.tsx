"use client"

import { motion } from "framer-motion"
import { Star, Play } from "lucide-react"

const featuredArtists = [
  {
    name: "Alex Chen",
    specialty: "3D Animation",
    rating: 4.9,
    projects: 127,
    image: "/placeholder.svg?height=80&width=80",
    rotation: -20,
  },
  {
    name: "Maya Rodriguez",
    specialty: "Motion Graphics",
    rating: 5.0,
    projects: 89,
    image: "/placeholder.svg?height=80&width=80",
    rotation: -10,
  },
  {
    name: "David Kim",
    specialty: "AI Video Generation",
    rating: 4.8,
    projects: 156,
    image: "/placeholder.svg?height=80&width=80",
    rotation: 0,
  },
  {
    name: "Sarah Johnson",
    specialty: "Visual Effects",
    rating: 4.9,
    projects: 203,
    image: "/placeholder.svg?height=80&width=80",
    rotation: 10,
  },
  {
    name: "Marcus Thompson",
    specialty: "Character Animation",
    rating: 5.0,
    projects: 94,
    image: "/placeholder.svg?height=80&width=80",
    rotation: 20,
  },
  {
    name: "Lisa Wang",
    specialty: "Explainer Videos",
    rating: 4.7,
    projects: 178,
    image: "/placeholder.svg?height=80&width=80",
    rotation: 30,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -300,
    scale: 1.4,
    rotate: (custom) => custom.rotation,
    x: (custom) => custom.rotation * 2, // Spread horizontally based on rotation
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      type: "spring",
      damping: 12,
      stiffness: 80,
    },
  },
}

export default function FeaturedArtists() {
  return (
    <section style={{ padding: `var(--spacing-xxl) ${24}px` }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center" style={{ marginBottom: "var(--spacing-xxl)" }}>
          <p className="overline" style={{ marginBottom: "var(--spacing-m)" }}>
            Featured Talent
          </p>
          <h2
            style={{
              fontSize: "var(--size-xl)",
              fontWeight: "var(--weight-bold)",
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-heading)",
              lineHeight: "var(--line-height-heading)",
            }}
          >
            Meet our top AI video artists
          </h2>
        </div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={index}
                custom={{ rotation: artist.rotation }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                style={{
                  backgroundColor: "var(--color-bg-default)",
                  border: "1px solid #E5E5E5",
                  borderRadius: "var(--radius-m)",
                  padding: "var(--spacing-l)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                }}
              >
                <div className="flex items-start" style={{ gap: "var(--spacing-m)" }}>
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-1">
                    <h3
                      style={{
                        fontSize: "var(--size-l)",
                        fontWeight: "var(--weight-bold)",
                        color: "var(--color-text-primary)",
                        fontFamily: "var(--font-heading)",
                        marginBottom: "var(--spacing-xs)",
                      }}
                    >
                      {artist.name}
                    </h3>
                    <p
                      className="body-text"
                      style={{
                        fontSize: "var(--size-s)",
                        marginBottom: "var(--spacing-s)",
                      }}
                    >
                      {artist.specialty}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center" style={{ gap: "var(--spacing-xs)" }}>
                        <Star className="w-4 h-4" style={{ color: "#FFD700", fill: "#FFD700" }} />
                        <span
                          style={{
                            fontSize: "var(--size-s)",
                            fontWeight: "var(--weight-medium)",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {artist.rating}
                        </span>
                      </div>
                      <div className="flex items-center" style={{ gap: "var(--spacing-xs)" }}>
                        <Play className="w-4 h-4" style={{ color: "var(--color-text-subtle)" }} />
                        <span
                          style={{
                            fontSize: "var(--size-s)",
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {artist.projects} projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
