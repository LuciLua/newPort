"use client"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { NextIntlClientProvider } from "next-intl"
import { TranslationContextProvider } from "../contexts/TranslationContext"

import { dictionaries } from "../dictionaries/dictionaries"
import { ModalContextProvider } from "../contexts/ModalContext"

export function Providers({ children, params }) {
  const dic = dictionaries()
  return (
    <>
      <NextIntlClientProvider locale="pt" messages={dic}>
        <TranslationContextProvider params={params}>
          <ModalContextProvider>
            {children}
            <ToastContainer className={"z-40"} />
          </ModalContextProvider>
        </TranslationContextProvider>
      </NextIntlClientProvider>
    </>
  )
}
