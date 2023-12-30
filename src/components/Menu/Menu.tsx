export function Menu() {
  return (
    <div className="w-full h-[120px] bg-[#ffffffe7] backdrop-blur-[12px] flex justify-center fixed top-0 z-40">
      <ul className="list-none flex justify-between w-full max-w-[1300px] h-full  items-center px-[10px]">
        <li className="flex flex-col h-full justify-center ">
          <h1 className="text-[28px] font-black">LUCILUA</h1>
          <h2 className="className=text-[18px] font-medium">
            Frontend Developer
          </h2>
        </li>
        <li>
          <ul className="list-none gap-10 flex items-center w-fit h-full font-[700]">
            <div className="lg:flex gap-10 hidden">
              <li>Homepage</li>
              <li>Projects</li>
              <li>About me</li>
            </div>
            <li className="bg-black text-white px-[30px] py-[10px] font-[500] rounded-[3px]">
              Talk with me
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
