"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { MoreText } from "./MoreText"

type EducationBoxProps = {
  titleCourse: string
  timeConclusion: string
  dateConclusion: string
  courseDescription: string
  credential?: boolean
  credentialLink?: string
  credentialLabel?: string
  style?: string
  moreText?: boolean
}

export function EducationBox({
  titleCourse,
  timeConclusion,
  dateConclusion,
  courseDescription,
  credentialLink,
  credential,
  credentialLabel,
  style,
  moreText
}: EducationBoxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className={`${style} bg-[#fafafa] border-[1px] border-[#ddd] shadow-lg mr-auto flex flex-col p-4 justify-between w-full rounded-[4px] h-fit`}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h1 className="font-[600] text-[16px] text-[#121212]">
            {titleCourse}
          </h1>
          <span className="text-nowrap max-h-[25px] font-[500] text-[14px]  bg-[#e7e7e7] text-[#232323] rounded-full px-2 flex justify-center items-center gap-2">
            <AiOutlineClockCircle />
            {timeConclusion}
          </span>
        </div>
        <h2 className="font-[500] text-[14px] py-[4px] text-[#1d1d1d]">
          {dateConclusion}
        </h2>
      </div>
      <div className="w-full mt-[10px] text-[15px] text-[#454545]">
        {moreText ?
          <MoreText numOfLines={2}>
            {courseDescription}
          </MoreText>
          :
          <p>
            {courseDescription}
          </p>
        }
      </div>
      {credential && (
        <a
          href={credentialLink}
          target="_blank"
          className="self-start py-[10px] font-[400] text-[14px] underline text-[#858585]"
        >
          {credentialLabel}
        </a>
      )}
    </motion.div>
  )
}
