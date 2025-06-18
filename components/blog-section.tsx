"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Video Generation: What's Coming in 2024",
    excerpt: "Explore the latest developments in AI video technology and how they're reshaping the creative industry.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose the Right AI Video Artist for Your Project",
    excerpt: "A comprehensive guide to finding and hiring the perfect AI video artist for your specific needs.",
    image: "/placeholder.svg?height=300&width=400",
    date: "December 12, 2024",
    readTime: "3 min read",
    category: "Guide",
    featured: false,
  },
  {
    id: 3,
    title: "Top 10 AI Video Tools Every Creator Should Know",
    excerpt: "Discover the most powerful AI video generation tools that are transforming content creation.",
    image: "/placeholder.svg?height=300&width=400",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Tools",
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function BlogSection() {
  return (
    <section
      style={{
        padding: `80px ${24}px var(--spacing-l) ${24}px`,
        marginTop: "-40px",
        backgroundColor: "var(--color-bg-default)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "var(--spacing-xxl)" }}>
          <p className="overline" style={{ marginBottom: "var(--spacing-m)" }}>
            Latest News
          </p>
          <h2
            style={{
              fontSize: "var(--size-xl)",
              fontWeight: "var(--weight-bold)",
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-heading)",
              lineHeight: "var(--line-height-heading)",
              marginBottom: "var(--spacing-l)",
            }}
          >
            Stay updated with the latest in AI video creation
          </h2>
          <p
            className="body-text"
            style={{
              fontSize: "var(--size-l)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Insights, tutorials, and industry news from the world of AI-powered video production.
          </p>
        </div>

        {/* Blog Grid */}
        <motion.div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={`relative overflow-hidden cursor-pointer group ${
                post.featured && index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{
                backgroundColor: "var(--color-bg-default)",
                border: "1px solid #E5E5E5",
                borderRadius: "var(--radius-m)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                minHeight: post.featured && index === 0 ? "500px" : "400px",
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{
                  height: post.featured && index === 0 ? "60%" : "50%",
                  backgroundColor: "var(--color-bg-subtle)",
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${post.image})`,
                  }}
                />

                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4"
                  style={{
                    backgroundColor: "var(--color-primary-main)",
                    color: "var(--color-white)",
                    borderRadius: "var(--radius-s)",
                    padding: "var(--spacing-xs) var(--spacing-s)",
                    fontSize: "var(--size-xs)",
                    fontWeight: "var(--weight-medium)",
                    fontFamily: "var(--font-body)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--letter-spacing-wide)",
                  }}
                >
                  {post.category}
                </div>

                {/* Arrow Icon */}
                <div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: "var(--radius-s)",
                    padding: "var(--spacing-s)",
                  }}
                >
                  <ArrowUpRight className="w-5 h-5" style={{ color: "var(--color-text-primary)" }} />
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "var(--spacing-l)",
                  height: post.featured && index === 0 ? "40%" : "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Meta Info */}
                <div
                  className="flex items-center"
                  style={{ gap: "var(--spacing-m)", marginBottom: "var(--spacing-m)" }}
                >
                  <div className="flex items-center" style={{ gap: "var(--spacing-xs)" }}>
                    <Calendar className="w-4 h-4" style={{ color: "var(--color-text-subtle)" }} />
                    <span
                      style={{
                        fontSize: "var(--size-s)",
                        color: "var(--color-text-subtle)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <div className="flex items-center" style={{ gap: "var(--spacing-xs)" }}>
                    <Clock className="w-4 h-4" style={{ color: "var(--color-text-subtle)" }} />
                    <span
                      style={{
                        fontSize: "var(--size-s)",
                        color: "var(--color-text-subtle)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: post.featured && index === 0 ? "var(--size-xl)" : "var(--size-l)",
                    fontWeight: "var(--weight-bold)",
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-heading)",
                    lineHeight: "var(--line-height-heading)",
                    marginBottom: "var(--spacing-s)",
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="body-text"
                  style={{
                    fontSize: "var(--size-m)",
                    lineHeight: "var(--line-height-body)",
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div
                  className="flex items-center group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    gap: "var(--spacing-xs)",
                    marginTop: "var(--spacing-m)",
                    opacity: 0.7,
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--size-s)",
                      fontWeight: "var(--weight-medium)",
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-body)",
                      textTransform: "uppercase",
                      letterSpacing: "var(--letter-spacing-wide)",
                    }}
                  >
                    Read More
                  </span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: "var(--color-text-primary)" }} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          style={{ marginTop: "var(--spacing-xxl)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button
            className="button-primary"
            style={{
              fontSize: "var(--size-m)",
              padding: "var(--spacing-l) var(--spacing-xl)",
            }}
          >
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
}
