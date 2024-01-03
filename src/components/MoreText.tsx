"use client"

import { useEffect, useState } from "react"
import { TfiMoreAlt } from "react-icons/tfi"

export function MoreText({
  children,
  numOfLines,
  style,
}: {
  children: React.ReactNode
  numOfLines?: number
  style?: string
}) {
  const [num, setNum] = useState(2)

  // useEffect(() => {
  // }, [num])

  function moreText() {
    setNum(999)
  }
  console.log(num)

  return (
    <div className={`${style}`}>
      {num != 2 ? (
        <p
          className={`line-clamp-[10] overflow-hidden font-[500] z-20 text-justify`}
        >
          {children}
        </p>
      ) : (
        <div className="flex flex-col">
          <p className={`line-clamp-[${numOfLines}] overflow-hidden font-[500] z-20 text-justify`}>
            {children}
          </p>
          <TfiMoreAlt onClick={moreText} className="bg-[#e9e9e9] rounded-[30px] cursor-pointer w-[40px] h-[20px] text-[#939393] my-2"/>
        </div>
      )}
    </div>
  )
}
