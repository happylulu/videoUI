"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  // Horizontal movement ONLY throughout the scroll
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, 600]), springConfig)

  // Early rotation effects - establish the view quickly then stay stable
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.1], [15, 0]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.1], [20, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.1], [0.2, 1]), springConfig)

  // ABSOLUTELY NO VERTICAL MOVEMENT until the very final transition
  const translateY = useSpring(useTransform(scrollYProgress, [0.98, 1], [0, -200]), springConfig)

  return (
    <div
      ref={ref}
      className="h-[400vh] overflow-visible antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{ paddingTop: "40px", paddingBottom: "0px" }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY, // This stays at 0 until 98% scroll
          opacity,
          // Fixed positioning - no early movement
          paddingTop: "120px",
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-0 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-8 md:py-16 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Discover Amazing <br /> AI Video Artists
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Browse through our curated collection of talented AI video artists and their stunning work. Find the perfect
        artist for your next project.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: any
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
    </motion.div>
  )
}
