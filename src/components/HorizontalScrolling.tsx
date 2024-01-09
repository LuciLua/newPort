"use client"

import { useEffect, useRef } from "react"
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"
import { useMenuStateColor } from "../hooks/useMenuStateColor"

export function HorizontalScrolling() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    smooth: 900,
    layoutEffect: true,
    offset: [-2, 1.5],
    axis: "y",
  })

  const x = useTransform(scrollYProgress, [1, -1], ["0%", "-50%"])
  const xN = useTransform(scrollYProgress, [1, -1], ["0%", "50%"])

  const y = useTransform(scrollYProgress, [0, 1], [-1400, 700])

  const isInView = useInView(targetRef, { margin: "-47%" })

  const { toggleMenuStateColor, menuStateColor } = useMenuStateColor()

  useEffect(() => {
    if (isInView) {
      toggleMenuStateColor(true)
    } else {
      toggleMenuStateColor(false)
    }
  }, [isInView])

  return (
    <div className="mx-auto w-full  py-[20px] px-[10px] bg-[#000] flex justify-center items-center overflow-hidden">
      <div
        ref={targetRef}
        className="h-[200vh] relative w-full max-w-[1300px] flex justify-center items-center"
      >
        <div className="text-[35px] top-0 font-[700] flex-col gap-4 justify-center bg-[#000] text-[#fff]  h-[100svh] sticky flex  items-center scroll-smooth">
          <AnimatePresence>
            <motion.div
              animate={{ fontSmooth: 900, WebkitFontSmoothing: 999 }}
              className="flex flex-col"
              style={{ x: x, y: y }}
              whileInView={{ opacity: 1, margin: 2 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-[4vw]">when</h2>
              <h1 className="text-[12vw]">Creativity</h1>
            </motion.div>
            <motion.div
              style={{ x: xN, y: y }}
              className="flex gap-4 flex-col"
              exit={{ opacity: 0 }}
              whileInView={{ opacity: 1, margin: 2 }}
              animate={{ opacity: 0 }}
            >
              <h2 className="text-[4vw] w-full text-end h-[10px]">meets</h2>
              <h1 className="text-[12vw] ">Innovation</h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
