"use client"

import { BiWorld } from "react-icons/bi"
import { TfiAngleDown } from "react-icons/tfi"
import { BtnToggleLocale } from "../Btns/BtnToggleLocale"
import { useState } from "react"

export function ItemMenuDropdown() {
  const [dropDownOpen, setDropDownOpen] = useState(false)

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
                  className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50"
                  lang={"en"}
                  lang_label="English"
                />
                <BtnToggleLocale
                  className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50"
                  lang={"pt"}
                  lang_label="Portuguese"
                />
                <BtnToggleLocale
                  className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50"
                  lang={"fr"}
                  lang_label="French"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
