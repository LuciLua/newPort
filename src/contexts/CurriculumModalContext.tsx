"use client"

import { createContext, useState } from "react"

export const CurriculumModalContext = createContext<any>({})

export function CurriculumModalContextProvider({ children }) {
  const [useModal, setUseModal] = useState<boolean>(false)

  function toggleModalOpen() {
    setUseModal(!useModal)
  }

  return (
    <CurriculumModalContext.Provider
      value={{ useModal, setUseModal, toggleModalOpen }}
    >
      {children}
    </CurriculumModalContext.Provider>
  )
}
