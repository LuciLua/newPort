"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useModal } from "../hooks/useModal"

export function Project({ name, img, url, stack, description }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })

  const rotated = `${[
    "translate3d(20px, -10px, 5px)" + "rotateY(20deg)" + "rotateX(20deg)",
  ]}`

  const { toggleModalOpen, setModalContent, setModalType } = useModal()

  return (
    <>
      <motion.div
        className="w-fit rounded-[12px] max-w-[350px] h-fit min-w-[300px] min-h-[250px] border-[1px] overflow-hidden border-[#ddd]"
        ref={ref}
        style={{
          transform: isInView ? "none" : rotated,
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <img
          src={img}
          alt="image_project"
          className="w-full object-contain h-fit opacity-90  grayscale-[0.3] contrast-[1.1] brightness-[0.95]"
        />
        <div className="flex w-full gap-2 h-fit border-y-[1px] border-y-[#ddd] px-[4px] py-[10px] flex-wrap">
          {stack.map((tool) => {
            return (
              <div
                key={tool}
                className="bg-[#ebebeb] px-[8px] py-[3px] flex text-[13px] font-[500] rounded-[4px]"
              >
                {tool}
              </div>
            )
          })}
        </div>
        <div className="flex justify-between h-fit items-center mt-3 py-2 px-5">
          <h1 className="text-black text-[20px] font-[700] ">{name}</h1>
          <button
            className=" text-black underline px-5 py-1 h-fit rounded-[3px]"
            onClick={() => {
              toggleModalOpen(),
                setModalType("project"),
                setModalContent({ name, img, url, stack, description })
            }}
          >
            Sobre
          </button>
          <a
            className="bg-black text-white px-5 py-1 h-fit rounded-[3px]"
            href={url}
            target="_blank"
          >
            Acessar
          </a>
        </div>
      </motion.div>
      {/* {modalOpen && <ProjectModal name={name} url={url}  img={img} stack={stack} description="teste" />} */}
    </>
  )
}
