"use client"

import { BiWorld } from "react-icons/bi"
import { TfiAngleDown } from "react-icons/tfi"
import { BtnToggleLocale } from "../Btns/BtnToggleLocale"
import { useState } from "react"
import { useTranslation } from "../../hooks/useTranslation"

export function ItemMenuDropdown() {
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const { translations } = useTranslation()

  return (
    <>
      <div>
        <div className="relative flex justify-center items-center gap-2 text-left">
          <button
            className="flex gap-1"
            onClick={() => setDropDownOpen(!dropDownOpen)}
          >
            <BiWorld className="text-[16px]" />
            <TfiAngleDown className="text-[13px] text-[#565656]" />
          </button>
          {dropDownOpen && (
            <div className="absolute right-[20px] top-[25px] z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-[500]">
              <div className="w-full" role="none">
                <BtnToggleLocale
                  className={`w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 ${translations.current_lang === translations.lang_opt_1 &&
                    "bg-[#ddd] text-[#505050] hover:bg-[#ddd]"
                    }`}
                  lang={"en"}
                  lang_label={translations.lang_opt_1}
                />
                <BtnToggleLocale
                  className={`w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 ${translations.current_lang === translations.lang_opt_2 &&
                    "bg-[#ddd] text-[#505050] hover:bg-[#ddd]"
                    }`}
                  lang={"pt"}
                  lang_label={translations.lang_opt_2}
                />
                <BtnToggleLocale
                  className={`w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 ${translations.current_lang === translations.lang_opt_3 &&
                    "bg-[#ddd] text-[#505050] hover:bg-[#ddd]"
                    }`}
                  lang={"fr"}
                  lang_label={translations.lang_opt_3}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
