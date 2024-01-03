'use client'
import { useProjectModal } from "../hooks/useProjectModal"
import { AiFillCloseCircle } from "react-icons/ai"
import { motion } from "framer-motion"

export function ProjectModal() {

    const { toggleModalOpen, modalOpen, modalContent } = useProjectModal()
    const { name, img, url, stack, description } = modalContent


    {
        return modalOpen &&
            (
                <div

                    className="top-0 w-full h-[100svh] bg-[#ffffffcf] backdrop-blur-[10px] flex flex-col justify-center items-center fixed z-50 p-3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
                        }} className="w-full max-w-[700px] h-fit min-h-[200px] relative flex flex-col bg-[#fff] p-4 rounded-[4px] shadow-[rgb(222,222,222)] shadow-[0px_0px_12px]">

                        <button onClick={toggleModalOpen} className="absolute right-[-10px] text-[30px] top-[-10px] text-[#484848] font-[500] rounded-full hover:text-[#121212]"><AiFillCloseCircle /></button>
                        <h1 className="text-[#000] font-[700] text-[25px]">{name}</h1>
                        <div className="flex w-full gap-2 h-fit border-y-[1px] border-y-[#ddd] px-[4px] py-[10px] flex-wrap">
                            {stack.map((tool) => {
                                return (
                                    <div key={tool} className="bg-[#ebebeb] px-[8px] py-[3px] flex text-[13px] font-[500] rounded-[4px]">
                                        {tool}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="custom-scrollbar overflow-y-scroll overflow-x-hidden scroll-py-[1px]">
                            <p className="py-4" >{description}</p>
                            <img src={img} alt="Project Image" className="py-4" />
                            <a
                                className="bg-[#121212] text-white px-5 py-3 h-fit rounded-[3px] flex justify-center items-center"
                                href={url}
                                target="_blank"
                            >
                                Acessar
                            </a>
                        </div>
                    </motion.div>
                </div>
            )
    }
}