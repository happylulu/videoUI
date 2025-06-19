"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface DropdownItem {
  label: string
  href: string
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
}

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center transition-colors hover:opacity-85"
        style={{
          color: "var(--color-text-secondary)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--size-m)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          gap: "var(--spacing-xs)",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 z-50"
            style={{
              marginTop: "var(--spacing-s)",
              minWidth: "200px",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--color-bg-default)",
                border: "1px solid #E5E5E5",
                borderRadius: "var(--radius-m)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                padding: "var(--spacing-s)",
                backdropFilter: "blur(20px)",
              }}
            >
              {items.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ backgroundColor: "var(--color-bg-subtle)" }}
                    className="transition-colors cursor-pointer"
                    style={{
                      padding: "var(--spacing-s) var(--spacing-m)",
                      borderRadius: "var(--radius-s)",
                      fontSize: "var(--size-m)",
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--weight-regular)",
                    }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
