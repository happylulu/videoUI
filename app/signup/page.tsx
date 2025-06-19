"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: "var(--color-bg-subtle)",
        padding: "var(--spacing-l)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
        style={{
          backgroundColor: "var(--color-bg-default)",
          borderRadius: "var(--radius-m)",
          padding: "var(--spacing-xxl) var(--spacing-xl)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid #E5E5E5",
        }}
      >
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "var(--spacing-xxl)" }}>
          <h1
            style={{
              fontSize: "var(--size-xl)",
              fontWeight: "var(--weight-bold)",
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-heading)",
              lineHeight: "var(--line-height-heading)",
              marginBottom: "var(--spacing-m)",
            }}
          >
            Welcome to AIArtists
          </h1>
          <p
            className="body-text"
            style={{
              fontSize: "var(--size-l)",
              color: "var(--color-text-secondary)",
            }}
          >
            Create an account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              style={{
                display: "block",
                fontSize: "var(--size-m)",
                fontWeight: "var(--weight-medium)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-body)",
                marginBottom: "var(--spacing-s)",
              }}
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                backgroundColor: "var(--color-bg-default)",
                border: "1px solid #E5E5E5",
                borderRadius: "var(--radius-m)",
                padding: "var(--spacing-m) var(--spacing-l)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--size-m)",
                color: "var(--color-text-primary)",
                focusRingColor: "var(--color-primary-main)",
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "var(--size-m)",
                fontWeight: "var(--weight-medium)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-body)",
                marginBottom: "var(--spacing-s)",
              }}
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                backgroundColor: "var(--color-bg-default)",
                border: "1px solid #E5E5E5",
                borderRadius: "var(--radius-m)",
                padding: "var(--spacing-m) var(--spacing-l)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--size-m)",
                color: "var(--color-text-primary)",
                focusRingColor: "var(--color-primary-main)",
              }}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "var(--size-m)",
                fontWeight: "var(--weight-medium)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-body)",
                marginBottom: "var(--spacing-s)",
              }}
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Your password"
              required
              className="w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                backgroundColor: "var(--color-bg-default)",
                border: "1px solid #E5E5E5",
                borderRadius: "var(--radius-m)",
                padding: "var(--spacing-m) var(--spacing-l)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--size-m)",
                color: "var(--color-text-primary)",
                focusRingColor: "var(--color-primary-main)",
              }}
            />
          </div>

          {/* Sign Up Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="button-primary w-full"
            style={{
              marginTop: "var(--spacing-xl)",
              padding: "var(--spacing-l)",
              fontSize: "var(--size-m)",
              fontWeight: "var(--weight-medium)",
            }}
          >
            Sign Up
          </motion.button>

          {/* Divider */}
          <div className="flex items-center" style={{ margin: "var(--spacing-xl) 0" }}>
            <div
              className="flex-1"
              style={{
                height: "1px",
                backgroundColor: "#E5E5E5",
              }}
            />
            <span
              style={{
                padding: "0 var(--spacing-l)",
                fontSize: "var(--size-s)",
                color: "var(--color-text-subtle)",
                fontFamily: "var(--font-body)",
                fontWeight: "var(--weight-medium)",
              }}
            >
              OR
            </span>
            <div
              className="flex-1"
              style={{
                height: "1px",
                backgroundColor: "#E5E5E5",
              }}
            />
          </div>

          {/* Google Sign Up */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: "var(--color-bg-subtle)",
              border: "1px solid #E5E5E5",
              borderRadius: "var(--radius-m)",
              padding: "var(--spacing-l)",
              fontSize: "var(--size-m)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-body)",
              gap: "var(--spacing-s)",
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
            Sign up with Google
          </motion.button>
        </form>

        {/* Login Link */}
        <div className="text-center" style={{ marginTop: "var(--spacing-xl)" }}>
          <p
            style={{
              fontSize: "var(--size-m)",
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Already have an account?{" "}
            <Link
              href="/login"
              className="transition-colors hover:opacity-75"
              style={{
                color: "var(--color-text-primary)",
                fontWeight: "var(--weight-medium)",
                textDecoration: "underline",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
