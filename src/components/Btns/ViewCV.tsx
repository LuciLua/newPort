"use client"

import { AiOutlineEye } from "react-icons/ai"
import { ModalContext } from "../../contexts/ModalContext"
import { useContext } from "react"

export function ViewCV() {
  const { toggleModalOpen, setModalType } = useContext(ModalContext)

  function openCV() {
    setModalType("cv")
    toggleModalOpen()
  }

  return (
    <button
      className="border-b-[1px] border-b-[#121212] flex gap-1 justify-center items-center h-fit"
      onClick={() => openCV()}
    >
      <AiOutlineEye className="font-[12px]" /> View CV
    </button>
  )
}
