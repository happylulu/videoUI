"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Sign in attempt:", formData)
    setIsLoading(false)
    onClose() // Close modal on successful sign in
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGoogleSignIn = () => {
    console.log("Google sign in")
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
            padding: "var(--spacing-l)",
          }}
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md"
            style={{
              backgroundColor: "var(--color-bg-default)",
              border: "1px solid #E5E5E5",
              borderRadius: "var(--radius-m)",
              padding: "var(--spacing-xxl) var(--spacing-xl)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 transition-colors duration-200 hover:bg-gray-100 rounded-full"
              style={{
                color: "var(--color-text-subtle)",
              }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--size-xl)",
                  fontWeight: "var(--weight-bold)",
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--spacing-s)",
                }}
              >
                Welcome back
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--size-m)",
                  color: "var(--color-text-secondary)",
                }}
              >
                Sign in to your creative space
              </motion.p>
            </div>

            {/* Google Sign In Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-bg-subtle)",
                  border: "1px solid #E5E5E5",
                  borderRadius: "var(--radius-m)",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--size-m)",
                  padding: "var(--spacing-m) var(--spacing-l)",
                  height: "48px",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative mb-6"
            >
              <Separator style={{ backgroundColor: "#E5E5E5" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{
                    color: "var(--color-text-subtle)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--size-s)",
                    backgroundColor: "var(--color-bg-default)",
                    padding: "0 var(--spacing-m)",
                  }}
                >
                  OR
                </span>
              </div>
            </motion.div>

            {/* Sign In Form */}
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--size-s)",
                    fontWeight: "var(--weight-medium)",
                  }}
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--color-bg-default)",
                    border: "1px solid #E5E5E5",
                    borderRadius: "var(--radius-m)",
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--size-m)",
                    padding: "var(--spacing-m) var(--spacing-l)",
                    height: "48px",
                  }}
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--size-s)",
                    fontWeight: "var(--weight-medium)",
                  }}
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    className="pr-12 transition-all duration-300 focus:ring-2 focus:ring-opacity-50"
                    style={{
                      backgroundColor: "var(--color-bg-default)",
                      border: "1px solid #E5E5E5",
                      borderRadius: "var(--radius-m)",
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--size-m)",
                      padding: "var(--spacing-m) var(--spacing-l)",
                      height: "48px",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200"
                    style={{ color: "var(--color-text-subtle)" }}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  className="transition-colors duration-300 hover:opacity-75"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--size-s)",
                    textDecoration: "underline",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Forgot your password?
                </button>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--color-primary-main)",
                  border: "1px solid var(--color-primary-main)",
                  borderRadius: "var(--radius-pill)",
                  color: "var(--color-text-on-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--size-s)",
                  fontWeight: "var(--weight-medium)",
                  letterSpacing: "var(--letter-spacing-wide)",
                  textTransform: "uppercase",
                  padding: "var(--spacing-m) var(--spacing-l)",
                  height: "48px",
                }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                      style={{ borderColor: "var(--color-text-on-primary)", borderTopColor: "transparent" }}
                    />
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.form>

            {/* Sign Up Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center mt-6"
            >
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--size-s)",
                }}
              >
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    // Here you could open a sign-up modal instead
                    console.log("Navigate to sign up")
                  }}
                  className="transition-colors duration-300 hover:opacity-75"
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: "var(--weight-medium)",
                    textDecoration: "underline",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "inherit",
                    fontFamily: "inherit",
                  }}
                >
                  Sign up
                </button>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
