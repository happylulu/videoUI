"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Play, Edit, Plus } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    role: "Director",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Urban Symphony",
    role: "Cinematographer",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Digital Horizons",
    role: "Editor",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Midnight Canvas",
    role: "Director",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Electric Pulse",
    role: "VFX Artist",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Analog Future",
    role: "Color Grading",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "/placeholder.svg",
  },
]

export default function ProfilePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      {/* Hero Section - Full Bleed Showreel */}
      <motion.div ref={heroRef} className="relative h-screen overflow-hidden" style={{ opacity }}>
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>

        {/* Creator Info Overlay */}
        <div className="absolute bottom-12 left-12 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontFamily: "Lora, serif",
              fontSize: "48px",
              fontWeight: "700",
              color: "#F4F1EA",
              marginBottom: "8px",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Chloe Lin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              color: "#F4F1EA",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Director | Video Artist
          </motion.p>
        </div>

        {/* Edit Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-8 right-8 z-10 flex items-center gap-2 transition-all duration-300"
          style={{
            backgroundColor: "rgba(26, 26, 26, 0.8)",
            border: "1px solid #D4AF37",
            color: "#F4F1EA",
            padding: "12px 20px",
            borderRadius: "4px",
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            backdropFilter: "blur(10px)",
          }}
        >
          <Edit className="w-4 h-4" />
          Edit Profile
        </motion.button>
      </motion.div>

      {/* Body Content */}
      <div className="relative z-10" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-12 py-24">
          <div className="grid grid-cols-12 gap-16">
            {/* Left Column - Bio & Info */}
            <div className="col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#F4F1EA",
                    marginBottom: "32px",
                  }}
                >
                  Chloe Lin is a visionary director and video artist based in Los Angeles, specializing in cinematic
                  storytelling that blends traditional narrative with cutting-edge visual techniques. Her work explores
                  the intersection of technology and human emotion, creating immersive experiences that challenge
                  conventional boundaries.
                </p>

                {/* Press Quote */}
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative pl-6 mb-8"
                  style={{
                    borderLeft: "2px solid #D4AF37",
                    fontFamily: "Lora, serif",
                    fontSize: "20px",
                    fontStyle: "italic",
                    color: "#F4F1EA",
                    lineHeight: "1.6",
                  }}
                >
                  "Lin's work represents the future of visual storytelling—bold, innovative, and deeply human."
                  <footer className="mt-2 text-sm" style={{ color: "#999", fontFamily: "Inter, sans-serif" }}>
                    — Creative Review Magazine
                  </footer>
                </motion.blockquote>
              </motion.div>
            </div>

            {/* Right Column - Projects Grid */}
            <div className="col-span-7">
              <div className="flex items-center justify-between mb-8">
                <h2
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "32px",
                    fontWeight: "400",
                    color: "#F4F1EA",
                  }}
                >
                  Selected Work
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 transition-all duration-300"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #D4AF37",
                    color: "#F4F1EA",
                    padding: "10px 16px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <Plus className="w-4 h-4" />
                  Add Project
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div
                      className="relative overflow-hidden transition-all duration-500"
                      style={{
                        aspectRatio: "16/9",
                        borderRadius: "8px",
                        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)",
                        opacity: hoveredProject && hoveredProject !== project.id ? 0.5 : 1,
                        filter: hoveredProject && hoveredProject !== project.id ? "saturate(0.5)" : "saturate(1)",
                      }}
                    >
                      <img
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end"
                      >
                        <div className="p-6">
                          <h3
                            style={{
                              fontFamily: "Lora, serif",
                              fontSize: "20px",
                              fontWeight: "600",
                              color: "#F4F1EA",
                              marginBottom: "4px",
                            }}
                          >
                            {project.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#D4AF37",
                            }}
                          >
                            {project.role}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}
          onClick={() => setShowAddModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full grid grid-cols-2 gap-8"
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "12px",
              padding: "32px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Panel - Upload */}
            <div>
              <h3
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "24px",
                  color: "#F4F1EA",
                  marginBottom: "24px",
                }}
              >
                Upload Project
              </h3>

              <div
                className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:border-opacity-80"
                style={{
                  borderColor: "#D4AF37",
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                  height: "300px",
                }}
              >
                <Play className="w-12 h-12 mb-4" style={{ color: "#D4AF37" }} />
                <p style={{ color: "#F4F1EA", fontSize: "16px", fontFamily: "Inter, sans-serif" }}>
                  Drop your video here or click to browse
                </p>
              </div>
            </div>

            {/* Right Panel - Details */}
            <div>
              <h3
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "24px",
                  color: "#F4F1EA",
                  marginBottom: "24px",
                }}
              >
                Project Details
              </h3>

              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Project Title"
                  className="w-full bg-transparent border-b-2 pb-2 focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: "#444",
                    color: "#F4F1EA",
                    fontSize: "16px",
                    fontFamily: "Inter, sans-serif",
                  }}
                />

                <input
                  type="text"
                  placeholder="Your Role"
                  className="w-full bg-transparent border-b-2 pb-2 focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: "#444",
                    color: "#F4F1EA",
                    fontSize: "16px",
                    fontFamily: "Inter, sans-serif",
                  }}
                />

                <div className="flex gap-2 flex-wrap">
                  {["Music Video", "Commercial", "Short Film", "Documentary"].map((tag) => (
                    <button
                      key={tag}
                      className="transition-all duration-300"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid #D4AF37",
                        color: "#F4F1EA",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setShowAddModal(false)}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #444",
                      color: "#F4F1EA",
                      padding: "12px 24px",
                      borderRadius: "4px",
                      fontSize: "16px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      backgroundColor: "#D4AF37",
                      border: "1px solid #D4AF37",
                      color: "#1a1a1a",
                      padding: "12px 24px",
                      borderRadius: "4px",
                      fontSize: "16px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Add Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
