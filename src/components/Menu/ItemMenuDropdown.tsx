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
        <div className="relative inline-block text-left">
          <button
            onClick={() => setDropDownOpen(!dropDownOpen)}
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <BiWorld />
            <TfiAngleDown />
          </button>
          {dropDownOpen && (
            <div
              className="absolute right-[20] z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
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
