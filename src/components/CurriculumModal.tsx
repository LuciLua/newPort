"use client"

import { useContext } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { CurriculumModalContext } from "../contexts/CurriculumModalContext"

export function CurriculumModal() {

    const { useModal, setUseModal, toggleModalOpen } = useContext(CurriculumModalContext)

    {
        return useModal &&
            (
                <div className="top-0 w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] bg-[#4e4e4ecf] backdrop-blur-[10px] flex justify-center items-center fixed z-50 px-3 py-[20px] left-0 ">
                    <div className="relative">
                        <button
                            onClick={() => toggleModalOpen()}
                            className="absolute right-[15px] z-10 text-[30px] top-[10px] text-[#272727] font-[500] rounded-full hover:text-[#121212] bg-white p-[2px]"
                        >
                            <AiFillCloseCircle />
                        </button>
                        <div
                            className="gap-3 w-fit h-fit min-h-[200px] max-h-[calc(100dvh-100px)] relative flex  p-4 rounded-[4px] flex-wrap overflow-y-scroll overflow-x-hidden custom-scrollbar">

                            <img className="relative h-[770px] rounded-[12px] object-cover" src="/assets/cv/page1.png" />
                            <img className="relative h-[770px] rounded-[12px] object-cover" src="/assets/cv/page2.png" />
                        </div>
                    </div>
                </div>
            )
    }
}
