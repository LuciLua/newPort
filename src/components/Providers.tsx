"use client"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { LocaleContextProvider } from "../contexts/LocaleContext"
import { ProjectModalContextProvider } from "../contexts/ProjectModalContext"
import {
  CurriculumModalContext,
  CurriculumModalContextProvider,
} from "../contexts/CurriculumModalContext"
import { NextIntlClientProvider } from "next-intl"
import { TranslationContextProvider } from "../contexts/TranslationContext"

import { dictionaries } from "../dictionaries/dictionaries"

export function Providers({ children, params }) {
  const dic = dictionaries()
  return (
    <>
      <NextIntlClientProvider locale="pt" messages={dic}>
        <TranslationContextProvider params={params}>
          <ProjectModalContextProvider>
            <CurriculumModalContextProvider>
              {children}
              <ToastContainer className={"z-40"} />
            </CurriculumModalContextProvider>
          </ProjectModalContextProvider>
        </TranslationContextProvider>
      </NextIntlClientProvider>
    </>
  )
}
