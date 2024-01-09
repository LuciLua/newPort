"use client"

import { ItemMenuDropdown } from "./ItemMenuDropdown"
import { useMenuStateColor } from "../../hooks/useMenuStateColor"
import { useTranslation } from "../../hooks/useTranslation"
import { useTheme } from "../../hooks/useTheme"

export function Menu() {
  const { menuStateColor } = useMenuStateColor()
  const { translations } = useTranslation()
  const { toggleTheme, theme } = useTheme()
  

  function hiddenMenuStateColor() { return "bg-[var(--bg-default)] text-[#fff] top-[-70px] overflow-hidden" }
  function visibleMenuStateColor() { return "bg-[var(--bg-default)] text-[var(--text-h1)] top-0" }

  return (
    <div className={`w-full h-[70px] backdrop-blur-[12px] flex justify-center fixed z-40 transition-[1s] ${menuStateColor ? hiddenMenuStateColor() : visibleMenuStateColor()}`}>
      <ul className="list-none flex justify-between w-full max-w-[1300px] h-full  items-center px-[10px]">
        <li className="flex h-full justify-center items-center gap-5">
          <div className="flex flex-col justify-center leading-[20px]">
            <h1 className="text-[24px] font-black">LuciLua /{">"}</h1>
            <a href="#" className="text-[14px] font-medium">
              {translations.menu.logo}
            </a>
          </div>
        </li>
        <li><button onClick={() => {toggleTheme()}}>✨ {theme}</button></li>
        <li>
          <ul className="list-none xl:gap-10 gap-3 flex items-center w-fit h-full font-[600]">
            <div className="lg:flex gap-10 hidden text-[14px]">
              <li>
                <a href="#">{translations.menu.homepage}</a>
              </li>
              <li>{translations.menu.projects}</li>
              <li>{translations.menu.about}</li>
            </div>
            <li className={`bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] px-[30px] py-[10px] font-[600] rounded-[3px] text-nowrap`}>
              {translations.menu.primary_btn}
            </li>
            <ItemMenuDropdown />
          </ul>
        </li>
      </ul>
    </div>
  )
}
