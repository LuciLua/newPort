"use client"

import { motion, useScroll } from "framer-motion"

export const spring = {
  gentle: {
    type: `spring`,
    mass: 1,
    damping: 50,
    stiffness: 100,
    velocity: 2,
  },
}

export function Projeto({ name, img }) {
  const container = {
    expanded: {
      width: `100%`,
      transition: spring.gentle,
    },
  }

  const { scrollYProgress, scrollX, scrollY } = useScroll()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileDrag={{ scaleX: 1.2 }}
      style={{
        scaleX: scrollYProgress,
        animation: "ease-out",
      }}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      drag={"x"}
      dragElastic={0.01}
      dragConstraints={{ top: 2, left: 0, right: 1 }}
      animate="expanded"
      variants={container}
    >
      <div className="rounded-[4px] bg-[#ddd] w-[412px] h-[250px] min-w-[412px] min-h-[250px]">
        <h1>{name}</h1>
        <h2>{img}</h2>
      </div>
    </motion.div>
  )
}
