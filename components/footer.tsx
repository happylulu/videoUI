"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
  ],
  services: [
    { name: "Browse Artists", href: "#" },
    { name: "Post a Project", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "API", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Community", href: "#" },
    { name: "Guidelines", href: "#" },
    { name: "Safety", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "DMCA", href: "#" },
    { name: "Accessibility", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-subtle)",
        borderTop: "1px solid #E5E5E5",
        padding: `var(--spacing-xxl) ${24}px var(--spacing-xl) ${24}px`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2">
            <div
              className="text-2xl font-bold"
              style={{
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-heading)",
                fontWeight: "var(--weight-bold)",
                marginBottom: "var(--spacing-l)",
              }}
            >
              AI<span style={{ color: "var(--color-text-secondary)" }}>Artists</span>
            </div>
            <p
              className="body-text"
              style={{
                marginBottom: "var(--spacing-l)",
                maxWidth: "280px",
              }}
            >
              Connect with the world's top AI video artists and bring your creative vision to life.
            </p>

            {/* Contact Information */}
            <div style={{ marginBottom: "var(--spacing-l)" }}>
              <h4
                style={{
                  fontSize: "var(--size-m)",
                  fontWeight: "var(--weight-bold)",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Contact Us
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-s)" }}>
                <div className="flex items-center" style={{ gap: "var(--spacing-s)" }}>
                  <Mail className="w-4 h-4" style={{ color: "var(--color-text-subtle)" }} />
                  <span
                    style={{
                      fontSize: "var(--size-s)",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    hello@aiartists.com
                  </span>
                </div>
                <div className="flex items-center" style={{ gap: "var(--spacing-s)" }}>
                  <Phone className="w-4 h-4" style={{ color: "var(--color-text-subtle)" }} />
                  <span
                    style={{
                      fontSize: "var(--size-s)",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center" style={{ gap: "var(--spacing-s)" }}>
                  <MapPin className="w-4 h-4" style={{ color: "var(--color-text-subtle)" }} />
                  <span
                    style={{
                      fontSize: "var(--size-s)",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4
                style={{
                  fontSize: "var(--size-m)",
                  fontWeight: "var(--weight-bold)",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Follow Us
              </h4>
              <div className="flex items-center" style={{ gap: "var(--spacing-m)" }}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-colors hover:opacity-75"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "var(--color-bg-default)",
                      borderRadius: "var(--radius-s)",
                      border: "1px solid #E5E5E5",
                    }}
                  >
                    <social.icon className="w-5 h-5" style={{ color: "var(--color-text-secondary)" }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                fontSize: "var(--size-m)",
                fontWeight: "var(--weight-bold)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-heading)",
                marginBottom: "var(--spacing-l)",
              }}
            >
              Company
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-s)" }}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:opacity-75"
                    style={{
                      fontSize: "var(--size-s)",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4
              style={{
                fontSize: "var(--size-m)",
                fontWeight: "var(--weight-bold)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-heading)",
                marginBottom: "var(--spacing-l)",
              }}
            >
              Services
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-s)" }}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:opacity-75"
                    style={{
                      fontSize: "var(--size-s)",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4
              style={{
                fontSize: "var(--size-m)",
                fontWeight: "var(--weight-bold)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-heading)",
                marginBottom: "var(--spacing-l)",
              }}
            >
              Support
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-s)" }}>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:opacity-75"
                    style={{
                      fontSize: "var(--size-s)",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4
              style={{
                fontSize: "var(--size-m)",
                fontWeight: "var(--weight-bold)",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-heading)",
                marginBottom: "var(--spacing-l)",
              }}
            >
              Legal
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-s)" }}>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:opacity-75"
                    style={{
                      fontSize: "var(--size-s)",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      textDecoration: "none",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          style={{
            marginTop: "var(--spacing-xxl)",
            paddingTop: "var(--spacing-xl)",
            borderTop: "1px solid #E5E5E5",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4
                style={{
                  fontSize: "var(--size-l)",
                  fontWeight: "var(--weight-bold)",
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "var(--spacing-s)",
                }}
              >
                Stay in the loop
              </h4>
              <p
                className="body-text"
                style={{
                  fontSize: "var(--size-m)",
                }}
              >
                Get the latest updates on AI video trends, new artists, and platform features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row" style={{ gap: "var(--spacing-m)" }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: "var(--color-bg-default)",
                  border: "1px solid #E5E5E5",
                  borderRadius: "var(--radius-s)",
                  padding: "var(--spacing-m)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--size-m)",
                  color: "var(--color-text-primary)",
                }}
              />
              <button className="button-primary" style={{ whiteSpace: "nowrap" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: "var(--spacing-xl)",
            paddingTop: "var(--spacing-l)",
            borderTop: "1px solid #E5E5E5",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-m)",
          }}
          className="sm:flex-row sm:justify-between sm:items-center"
        >
          <p
            style={{
              fontSize: "var(--size-s)",
              color: "var(--color-text-subtle)",
              fontFamily: "var(--font-body)",
            }}
          >
            © 2024 AIArtists. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center" style={{ gap: "var(--spacing-l)" }}>
            <a
              href="#"
              className="transition-colors hover:opacity-75"
              style={{
                fontSize: "var(--size-s)",
                color: "var(--color-text-subtle)",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              Privacy Notice
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-75"
              style={{
                fontSize: "var(--size-s)",
                color: "var(--color-text-subtle)",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-75"
              style={{
                fontSize: "var(--size-s)",
                color: "var(--color-text-subtle)",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
