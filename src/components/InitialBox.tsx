import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

export function InitialBox() {
    return (
        <div className="bg-white border-[#000] border-[3px] max-w-[1300px] w-full h-fit min-h-[300px] flex flex-col ">

            <div className="flex xl:flex-row flex-col h-full w-full relative  shadow-[-12px_0_12px_inset] shadow-[#00000014]" >

                <div className="xl:border-r-[3px] xl:border-r-[#000] w-full h-full  items-center flex flex-col">
                    <div className="xl:py-[70px] py-[20px] xl:max-w-[500px] max-w-[700px] px-[10px]">
                        <h1 className=" leading-none text-[70px] font-black self-start text-[#0f0f0f]">Luci Lua</h1>
                        <h2 className=" font-[500] text-[20px] self-start text-[#2c2c2c]">Frontend Developer</h2>
                        <div className="flex gap-[10px] flex-col">
                            <h1 className="font-[800] mt-[30px]">About me</h1>
                            <p className="font-[600] z-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quia beatae repellat sunt modi aliquid quam ab quo laboriosam, exercitationem distinctio nulla dolorum dolorem! Neque exercitationem eligendi dolores nostrum suscipit.</p>
                            <div className="flex w-fit gap-5 mt-[30px] z-20">
                                <button className="bg-black text-white px-[30px] py-[10px] font-[500] rounded-[3px]">Talk with me</button>
                                <button className="bg-[#ddd] text-black px-[30px] py-[10px] font-[500] rounded-[3px]">Know more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" xl:w-full xl:h-full h-[220px] flex relative justify-center ">
                    {/* <div className=" xl:w-full xl:h-full h-[220px] flex relative justify-center "> */}
                    {/* <img className="z-10 top-[-137px] left-[-25px]  object-cover absolute " src="assets/outro.svg" /> */}
                    <img className="z-10 top-[-129px] xl:top-[-142px] xl:left-[-25px] xl:max-h-[650px] xl:min-h-[650px] max-h-[350px] min-h-[350px] object-cover absolute " src="assets/outro.svg" />
                </div>


                <div className="z-20 relative xl:absolute flex flex-row xl:flex-col gap-[20px] w-full h-full xl:w-[60px] xl:h-[calc(100%+80px)] xl:top-[-10px]  bg-white xl:border-x-[3px] border-y-[3px] xl:border-x-[#000]  xl:border-y-0 border-y-[#000] xl:right-[15px]  xl:pt-[20px] xl:justify-start justify-center items-center py-3 border-b-0">
                    <AiFillLinkedin className="text-[36px] w-fit h-fit " />
                    <AiFillGithub className="text-[36px] w-fit h-fit" />
                    <BiMailSend className="text-[36px] w-fit h-fit" />
                </div>


            </div>

            <footer className="gap-[30px] flex border-[#000] border-t-[3px] mt-auto w-full p-2 overflow-x-hidden">
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">NextJS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">ReactJS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">Javascript</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">SASS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">CSS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">NodeJS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">TailwindCSS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">VueJS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">AngularJS</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">Flexbox</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">HTML</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">Express</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">API</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">Git</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">GitHub</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">NPM</div>
                <div className="bg-[#ddd] text-black text-[15px] w-fit py-1 px-2 rounded-[2px]">Yarn</div>
            </footer>

        </div>
    )
}