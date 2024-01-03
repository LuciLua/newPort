'use client'

import { AiOutlineEye } from "react-icons/ai";
import { CurriculumModalContext } from "../../contexts/CurriculumModalContext";
import { useContext } from "react";

export function ViewCV() {

    const { useModal, setUseModal, toggleModalOpen } = useContext(CurriculumModalContext)

    return (
        <button className="border-b-[1px] border-b-[#121212] flex gap-1 justify-center items-center h-fit" onClick={() => toggleModalOpen()}>
            <AiOutlineEye className="font-[12px]" /> View CV
        </button>
    )
}