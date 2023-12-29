import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BiMailSend } from "react-icons/bi"
import { InitialBox } from "../components/InitialBox"

export default function homepage() {
    return (
        <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden  flex-col ">

            <div className="flex w-full max-w-[1300px] h-fit px-[10px] pt-[120px] xl:pt-[150px] pb-[20px] mx-auto
            "  >
                <InitialBox />
            </div>

            <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
                <h1 className="text-[35px] font-[700] pb-[20px]">Projetos</h1>
                <div className="flex w-full justify-center gap-5 flex-wrap">
                    <div className="rounded-[4px] bg-[#ddd] w-[412px] h-[250px] min-w-[412px] min-h-[250px] "/>
                    <div className="rounded-[4px] bg-[#ddd] w-[412px] h-[250px] min-w-[412px] min-h-[250px]"/>
                    <div className="rounded-[4px] bg-[#ddd] w-[412px] h-[250px] min-w-[412px] min-h-[250px]"/>
                    <div className="rounded-[4px] bg-[#ddd] w-[412px] h-[250px] min-w-[412px] min-h-[250px]"/>
                    <div className="rounded-[4px] bg-[#ddd] w-[412px] h-[250px] min-w-[412px] min-h-[250px]"/>
                    <div className="rounded-[4px] bg-[#ddd] w-[412px] h-[250px] min-w-[412px] min-h-[250px]"/>
                </div>
            </div>
        </div>
    )
}