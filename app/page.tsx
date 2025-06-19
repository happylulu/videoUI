"use client"

import { Search } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import CardRainAnimation from "../components/card-rain-animation"
import { RotateWords } from "../components/rotate-words"
import { HeroParallaxDemo } from "../components/hero-parallax-demo"
import BlogSection from "../components/blog-section"
import Footer from "../components/footer"
import NavDropdown from "../components/nav-dropdown"
import Link from "next/link"

export default function LandingPage() {
  const [searchValue, setSearchValue] = useState("")

  const handlePopularTermClick = (term: string) => {
    setSearchValue(term)
  }

  const exploreItems = [
    { label: "Featured Projects", href: "/explore/featured" },
    { label: "Artists of the Week", href: "/explore/artists-of-week" },
    { label: "Explainer Videos", href: "/explore/explainer-videos" },
    { label: "Music Videos", href: "/explore/music-videos" },
    { label: "Animation", href: "/explore/animation" },
    { label: "Advertising", href: "/explore/advertising" },
  ]

  const hireItems = [
    { label: "Browse Artists", href: "/browse-artists" },
    { label: "Post a Job", href: "/post-job" },
  ]

  return (
    <div className="relative" style={{ backgroundColor: "var(--color-bg-default)" }}>
      {/* First Section - Landing with Search */}
      <div className="min-h-screen relative">
        {/* Background Card Rain Animation */}
        <CardRainAnimation />

        {/* Main Content - NO OVERLAY so cards are fully visible */}
        <div className="relative" style={{ zIndex: 3 }}>
          {/* Header */}
          <header style={{ padding: `${32}px ${24}px` }}>
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/">
                <div
                  className="text-2xl font-bold cursor-pointer"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: "var(--weight-bold)",
                  }}
                >
                  AI<span style={{ color: "var(--color-text-secondary)" }}>Artists</span>
                </div>
              </Link>

              <div className="hidden md:flex items-center" style={{ gap: "var(--spacing-xl)" }}>
                <NavDropdown label="Explore" items={exploreItems} />
                <NavDropdown label="Hire an Artist" items={hireItems} />
                <a
                  href="#"
                  className="transition-colors hover:opacity-85"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--size-m)",
                  }}
                >
                  Find Jobs
                </a>
                <a
                  href="#"
                  className="transition-colors hover:opacity-85"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--size-m)",
                  }}
                >
                  Blog
                </a>
              </div>

              <div className="flex items-center" style={{ gap: "var(--spacing-m)" }}>
                <Link href="/sign-in">
                  <button
                    className="transition-opacity hover:opacity-85"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--size-m)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Sign in
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="button-primary">Get started</button>
                </Link>
              </div>
            </nav>
          </header>

          {/* Main Content - Centered Search */}
          <main
            className="flex items-center justify-center"
            style={{ minHeight: "calc(100vh - 120px)", padding: `0 ${24}px` }}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Hero Section */}
              <motion.div
                style={{ marginBottom: "var(--spacing-xl)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <div style={{ marginBottom: "var(--spacing-m)" }}>
                  <h1
                    className="heading-1"
                    style={{
                      marginBottom: "var(--spacing-l)",
                      fontSize: "clamp(2rem, 4vw, var(--size-xxl))",
                      textShadow: "0 2px 4px rgba(255,255,255,0.8)",
                      display: "flex",
                      flexWrap: "nowrap",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.4rem",
                      lineHeight: "var(--line-height-heading)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    <span>Explore the world's top AI</span>
                    <RotateWords text="" words={["Video Artists", "Filmmakers", "Storytellers"]} />
                  </h1>
                </div>

                {/* Subheader */}
                <motion.p
                  className="body-text"
                  style={{
                    fontSize: "var(--size-l)",
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "var(--weight-regular)",
                    lineHeight: "var(--line-height-body)",
                    textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 1 }}
                >
                  The future of video is here. Find the AI artist to create it for you.
                </motion.p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                <div className="relative max-w-2xl mx-auto">
                  <div
                    className="flex items-center transition-all duration-200 hover:shadow-sm"
                    style={{
                      backgroundColor: "rgba(248, 248, 248, 0.95)",
                      borderRadius: "var(--radius-pill)",
                      border: "1px solid #E5E5E5",
                      padding: "var(--spacing-s)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Search
                      className="w-5 h-5"
                      style={{
                        color: "var(--color-text-subtle)",
                        marginLeft: "var(--spacing-m)",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Search for AI video artists, styles, or projects..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="flex-1 bg-transparent border-none focus:outline-none"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--size-m)",
                        padding: `${12}px var(--spacing-m)`,
                        color: "var(--color-text-primary)",
                      }}
                    />
                    <button className="button-primary" style={{ margin: 0 }}>
                      Search
                    </button>
                  </div>
                </div>
                <p
                  className="overline"
                  style={{
                    marginTop: "var(--spacing-m)",
                    textAlign: "center",
                    textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                  }}
                >
                  Popular:{" "}
                  <button
                    onClick={() => handlePopularTermClick("RunwayML")}
                    className="transition-colors hover:opacity-85"
                    style={{
                      color: "var(--color-text-primary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontSize: "inherit",
                      fontFamily: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      textTransform: "inherit",
                    }}
                  >
                    RunwayML
                  </button>
                  ,{" "}
                  <button
                    onClick={() => handlePopularTermClick("VEO3")}
                    className="transition-colors hover:opacity-85"
                    style={{
                      color: "var(--color-text-primary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontSize: "inherit",
                      fontFamily: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      textTransform: "inherit",
                    }}
                  >
                    VEO3
                  </button>
                  ,{" "}
                  <button
                    onClick={() => handlePopularTermClick("ComfyUI")}
                    className="transition-colors hover:opacity-85"
                    style={{
                      color: "var(--color-text-primary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontSize: "inherit",
                      fontFamily: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      textTransform: "inherit",
                    }}
                  >
                    ComfyUI
                  </button>
                  ,{" "}
                  <button
                    onClick={() => handlePopularTermClick("3D Animation")}
                    className="transition-colors hover:opacity-85"
                    style={{
                      color: "var(--color-text-primary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontSize: "inherit",
                      fontFamily: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      textTransform: "inherit",
                    }}
                  >
                    3D Animation
                  </button>
                </p>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      {/* Second Section - Browse Artists with Parallax */}
      <div className="relative">
        <HeroParallaxDemo />
      </div>

      {/* Third Section - Blog */}
      <div className="relative">
        <BlogSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
