"use client"

import { ItemMenuDropdown } from "./ItemMenuDropdown"
import { useMenuStateColor } from "../../hooks/useMenuStateColor"
import { useTranslation } from "../../hooks/useTranslation"
import { useTheme } from "../../hooks/useTheme"
import { BiMenu } from "react-icons/bi"
import { useState } from "react"

export function Menu() {
  const { menuStateColor } = useMenuStateColor()
  const { translations } = useTranslation()
  const { toggleTheme, theme } = useTheme()

  const [openMenu, setOpenMenu] = useState(false)

  function hiddenMenuStateColor() {
    return "bg-[var(--bg-default)] text-[#fff] top-[-70px] overflow-hidden"
  }
  function visibleMenuStateColor() {
    return "bg-[var(--bg-default)] text-[var(--text-h1)] top-0"
  }

  return (
    <div
      className={`w-full h-[70px] backdrop-blur-[12px] flex justify-center fixed z-40 transition-[1s] ${
        menuStateColor ? hiddenMenuStateColor() : visibleMenuStateColor()
      }`}
    >
      <ul className="list-none flex justify-between w-full max-w-[1300px] h-full  items-center px-[10px]">
        <li className="flex h-full justify-center items-center gap-5">
          <div className="flex flex-col justify-center leading-[20px]">
            <h1 className="text-[22px] font-black">LuciLua /{">"}</h1>
            <a href="#" className="text-[12px] font-medium">
              {translations.menu.logo}
            </a>
          </div>
        </li>
        <li>
          <ul className="list-none xl:gap-10 gap-3 flex items-center w-fit h-full font-[600]">
            <div className="lg:flex gap-10 hidden text-[14px]">
              <li>
                <a href="#">{translations.menu.homepage}</a>
              </li>
              <li>{translations.menu.projects}</li>
              <li>{translations.menu.about}</li>
            </div>
            <li
              className={`bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] p-[10px] font-[600] rounded-[3px] text-nowrap xl:flex hidden`}
            >
              {translations.menu.primary_btn}
            </li>

            <div className="xl:hidden flex">
              <button
                className={`relative bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] p-[10px] font-[600] rounded-[3px] text-nowrap`}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <BiMenu />
              </button>
              {openMenu && (
                <div className="absolute top-[55px] right-[55px] bg-[var(--bg-default)]">
                  <li
                    className={`bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] px-[30px] py-[10px] font-[600] rounded-[3px] text-nowrap`}
                  >
                    {translations.menu.primary_btn}
                  </li>
                  <li className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
                    <a href="#">{translations.menu.homepage}</a>
                  </li>
                  <li className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
                    {translations.menu.projects}
                  </li>
                  <li className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50">
                    {translations.menu.about}
                  </li>
                  <li className="w-full">
                    <button
                      className="text-gray-700 block  text-sm hover:bg-gray-50 w-full px-4 py-2"
                      onClick={() => {
                        toggleTheme()
                      }}
                    >
                      Trocar tema
                    </button>
                  </li>
                </div>
              )}
            </div>

            <ItemMenuDropdown />
          </ul>
        </li>
      </ul>
    </div>
  )
}
