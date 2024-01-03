"use client"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { LocaleContextProvider } from "../contexts/LocaleContext"
import { ProjectModalContextProvider } from "../contexts/ProjectModalContext"
import { CurriculumModalContext, CurriculumModalContextProvider } from "../contexts/CurriculumModalContext"

export function Providers({ children }) {
  return (
    <>
      <LocaleContextProvider>
        <ProjectModalContextProvider>
          <CurriculumModalContextProvider>
            {children}
            <ToastContainer className={"z-40"} />
          </CurriculumModalContextProvider>
        </ProjectModalContextProvider>
      </LocaleContextProvider>
    </>
  )
}
