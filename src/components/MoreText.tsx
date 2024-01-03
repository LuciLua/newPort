'use client'

import { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";

export function MoreText({ children, numOfLines = 2, style }: { children: React.ReactNode, numOfLines?: number, style?: string}) {

    const [num, setNum] = useState(numOfLines)

    function moreText() {
        setNum(999)
    }

    return (
        <div className={`${style}`}>
            <p className={`line-clamp-${num} overflow-hidden font-[500] z-20 text-justify`}>{children}</p>
            {num > 2 ?
                null
                :
                <TfiMoreAlt onClick={() => moreText()} className="bg-[#ddd] rounded-[30px] cursor-pointer w-[40px] h-[20px] text-[#575757] my-2" />
            }
        </div>
    )
}