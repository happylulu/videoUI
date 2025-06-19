"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Upload, Check } from "lucide-react"

const crafts = [
  "Directing",
  "Cinematography",
  "Editing",
  "VFX",
  "Color Grading",
  "Sound Design",
  "Motion Graphics",
  "Animation",
  "Producing",
  "Writing",
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    showreel: null as File | null,
    selectedCrafts: [] as string[],
  })
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, showreel: file }))
      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
        }
      }, 200)
    }
  }

  const toggleCraft = (craft: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCrafts: prev.selectedCrafts.includes(craft)
        ? prev.selectedCrafts.filter((c) => c !== craft)
        : [...prev.selectedCrafts, craft],
    }))
  }

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#1a1a1a",
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.01) 0%, transparent 50%)
        `,
      }}
    >
      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: "grain 8s steps(10) infinite",
        }}
      />

      <AnimatePresence mode="wait">
        {/* Screen 1: Welcome */}
        {currentStep === 0 && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center min-h-screen"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "48px",
                  fontWeight: "400",
                  color: "#F4F1EA",
                  marginBottom: "48px",
                  lineHeight: "1.2",
                }}
              >
                Build your creative space.
              </motion.h1>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{
                  backgroundColor: "#D4AF37",
                  color: "#1a1a1a",
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                onClick={nextStep}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #D4AF37",
                  color: "#F4F1EA",
                  padding: "16px 32px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "400",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Begin
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Screen 2: Identity & Showreel */}
        {currentStep === 1 && (
          <motion.div
            key="identity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center min-h-screen px-8"
          >
            <div className="max-w-6xl w-full">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "36px",
                  fontWeight: "400",
                  color: "#F4F1EA",
                  marginBottom: "64px",
                  textAlign: "center",
                }}
              >
                Lead with your signature.
              </motion.h2>

              <div className="grid grid-cols-5 gap-12">
                {/* Left Panel - Showreel Upload (60%) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="col-span-3"
                >
                  <div
                    className="relative border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:border-opacity-80"
                    style={{
                      borderColor: "#D4AF37",
                      backgroundColor: "rgba(212, 175, 55, 0.05)",
                      height: "400px",
                    }}
                  >
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    {!formData.showreel ? (
                      <>
                        <Upload className="w-12 h-12 mb-4" style={{ color: "#D4AF37" }} />
                        <p style={{ color: "#F4F1EA", fontSize: "18px", fontFamily: "Inter, sans-serif" }}>
                          Upload or embed your showreel
                        </p>
                      </>
                    ) : (
                      <div className="text-center">
                        <Check className="w-12 h-12 mb-4" style={{ color: "#D4AF37" }} />
                        <p style={{ color: "#F4F1EA", fontSize: "18px", fontFamily: "Inter, sans-serif" }}>
                          {formData.showreel.name}
                        </p>
                      </div>
                    )}

                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadProgress}%` }}
                          className="h-full"
                          style={{ backgroundColor: "#D4AF37" }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Right Panel - Identity Fields (40%) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="col-span-2 space-y-8"
                >
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-0 border-b-2 pb-2 text-lg focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: "#444",
                        color: "#F4F1EA",
                        fontSize: "18px",
                        fontFamily: "Inter, sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                      onBlur={(e) => (e.target.style.borderColor = "#444")}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="Your Location"
                      className="w-full bg-transparent border-0 border-b-2 pb-2 text-lg focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: "#444",
                        color: "#F4F1EA",
                        fontSize: "18px",
                        fontFamily: "Inter, sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                      onBlur={(e) => (e.target.style.borderColor = "#444")}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={nextStep}
                    disabled={!formData.name || !formData.location || !formData.showreel}
                    className="w-full mt-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor:
                        formData.name && formData.location && formData.showreel ? "#D4AF37" : "transparent",
                      border: "1px solid #D4AF37",
                      color: formData.name && formData.location && formData.showreel ? "#1a1a1a" : "#F4F1EA",
                      padding: "12px 24px",
                      borderRadius: "4px",
                      fontSize: "16px",
                      fontFamily: "Inter, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    Continue
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Screen 3: Crafts */}
        {currentStep === 2 && (
          <motion.div
            key="crafts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center min-h-screen px-8"
          >
            <div className="max-w-4xl w-full text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "36px",
                  fontWeight: "400",
                  color: "#F4F1EA",
                  marginBottom: "64px",
                }}
              >
                What are your crafts?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {crafts.map((craft, index) => (
                  <motion.button
                    key={craft}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{
                      scale: 1.05,
                      borderWidth: "2px",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleCraft(craft)}
                    className="transition-all duration-300"
                    style={{
                      backgroundColor: formData.selectedCrafts.includes(craft) ? "#D4AF37" : "transparent",
                      border: "1px solid #D4AF37",
                      color: formData.selectedCrafts.includes(craft) ? "#1a1a1a" : "#F4F1EA",
                      padding: "12px 24px",
                      borderRadius: "24px",
                      fontSize: "16px",
                      fontFamily: "Inter, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    {craft}
                  </motion.button>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formData.selectedCrafts.length === 0}
                className="transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: formData.selectedCrafts.length > 0 ? "#D4AF37" : "transparent",
                  border: "1px solid #D4AF37",
                  color: formData.selectedCrafts.length > 0 ? "#1a1a1a" : "#F4F1EA",
                  padding: "16px 32px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontFamily: "Inter, sans-serif",
                  cursor: "pointer",
                }}
              >
                Complete Setup
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-5%, -10%) }
          20% { transform: translate(-15%, 5%) }
          30% { transform: translate(7%, -25%) }
          40% { transform: translate(-5%, 25%) }
          50% { transform: translate(-15%, 10%) }
          60% { transform: translate(15%, 0%) }
          70% { transform: translate(0%, 15%) }
          80% { transform: translate(3%, 35%) }
          90% { transform: translate(-10%, 10%) }
        }
      `}</style>
    </div>
  )
}
