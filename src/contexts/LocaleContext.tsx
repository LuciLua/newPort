"use client"

import { createContext } from "react"
// import en from "../../../public/disctionaries/en"
// import pt from "../../../public/disctionaries/pt"

export const LocaleContext = createContext(null)

export function LocaleContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <LocaleContext.Provider value={{}}>{children}</LocaleContext.Provider>
}
