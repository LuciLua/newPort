import { ItemMenuDropdown } from "./ItemMenuDropdown"

export function Menu() {
  return (
    <div className="w-full h-[70px] bg-[#ffffffe7] backdrop-blur-[12px] flex justify-center fixed top-0 z-40">
      <ul className="list-none flex justify-between w-full max-w-[1300px] h-full  items-center px-[10px]">
        <li className="flex h-full justify-center items-center gap-5">
          <div className="flex flex-col justify-center leading-[20px]">
            <h1 className="text-[24px] font-black text-[#262626]">
              LuciLua /{">"}
            </h1>
            <a href="#" className="text-[14px] font-medium">
              Frontend Developer
            </a>
          </div>
        </li>
        <li>
          <ul className="list-none xl:gap-10 gap-3 flex items-center w-fit h-full font-[600]">
            <div className="lg:flex gap-10 hidden text-[14px]">
              <li>Homepage</li>
              <li>Projects</li>
              <li>About me</li>
            </div>
            <li className="bg-[#262626] text-[14px] text-white px-[30px] py-[10px] font-[600] rounded-[3px] text-nowrap">
              Talk with me
            </li>
            <ItemMenuDropdown />
          </ul>
        </li>
      </ul>
    </div>
  )
}
