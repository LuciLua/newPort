import { InitialBox } from "../components/InitialBox"
import { Projeto } from "../components/Projeto"
import { AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai"


export default function homepage() {
  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden  flex-col ">
      <div className="flex w-full max-w-[1300px] h-fit xl:max-h-fit xl:min-h-[800px] xl:h-fit px-[10px] pt-[120px]  items-center pb-[40px] mx-auto">
        <InitialBox />
      </div>
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <h1 className="text-[35px] font-[700] ">Projetos</h1>
        <h2>Alguns projetos em destaque</h2>
        <div className="my-[40px] flex w-full justify-center gap-12 flex-wrap transform perspective-3d">
          <Projeto
            name={"Hidrofobia"}
            img={"/assets/projects/hidrofobia.png"}
            url={"https://curtahidrofobia.com/"}
            stack={["reactJS", "nextJS", "tailwindcss"]}
          />
          <Projeto
            name={"Somuuh"}
            img={"/assets/projects/somuuh.png"}
            url={"https://somuuh.vercel.app/"}
            stack={[
              "reactJS",
              "nextJS",
              "tailwindcss",
              "next-auth",
              "typescript",
            ]}
          />
          <Projeto
            name={"Notein"}
            img={"/assets/projects/notein.png"}
            url={"https://notein.vercel.app/"}
            stack={[
              "reactJS",
              "nextJS",
              "sass",
              "mongoDB",
              "typescript",
              "axios",
            ]}
          />
          <Projeto
            name={"Pokedex"}
            img={"/assets/projects/pokedex.png"}
            url={"https://pokedeex.vercel.app/"}
            stack={["reactJS", "nextJS", "sass"]}
          />
          <Projeto
            name={"ToDo"}
            img={"/assets/projects/todo.png"}
            url={"https://todo-lucilua.vercel.app/"}
            stack={["reactJS", "nextJS", "sass", "typescript", "localStorage"]}
          />
          <Projeto
            name={"Compare"}
            img={"/assets/projects/compare.png"}
            url={"https://compare-orpin.vercel.app/"}
            stack={["reactJS", "nextJS", "sass", "typescript", "axios"]}
          />
        </div>
        <div className="w-full flex justify-center items-center border-b-[1px] max-w-[1150px] mx-auto pb-[20px]">
          <button className="w-full h-fit  font-[700] p-4 rounded-[3px] bg-gradient-to-br from-[#b5b5b52a] to-transparent flex justify-center items-center gap-3 ">Discovery more projects <AiOutlineArrowRight /></button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <h1 className="text-[35px] font-[700] pb-[20px]">Educação</h1>
        <div className="flex w-full justify-center gap-5 flex-wrap p-[20px]">

          <div className="bg-[#fafafa] border-[1px] border-[#ddd] shadow-lg mr-auto flex flex-col p-4 justify-between w-full rounded-[4px]">
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <h1 className="font-[600] text-[16px] text-[#121212]">Curso Web Moderno Completo - Udemy</h1>
                <span className="text-nowrap max-h-[25px] font-[500] text-[14px]  bg-[#e7e7e7] text-[#232323] rounded-full px-2 flex justify-center items-center gap-2"><AiOutlineClockCircle />97 hours</span>
              </div>
              <h2 className="font-[500] text-[14px] py-[4px] text-[#1d1d1d]">2021-2023</h2>
            </div>
            <div className="w-full mt-[10px] text-[15px] text-[#454545]">
              <p>In this course, I learned about Javascript, Web
                Concepts, HTML and CSS, Ajax, Webpack,
                jQuery, Bootstrap, React, VueJs, Electron,
                Angular 9, Database (relational and NoSQL)
                and Express.</p>
            </div>
            <a href="https://www.udemy.com/certificate/UC-495b9d41-0005-46b2-9530-dae148592fa8/" target="_blank" className="self-start py-[10px] font-[400] text-[14px] underline text-[#858585]">credentials</a>
          </div>

          <div className="opacity-90 bg-[#fafafa] border-[1px] border-[#ddd] mr-auto flex flex-col p-4 justify-between max-w-[600px] w-full rounded-[4px]">
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <h1 className="font-[600] text-[16px] text-[#121212]">Bacharelado Interdisciplinar em
                  Artes e Design | UFJF</h1>
                <span className="text-nowrap max-h-[25px] font-[500] text-[14px]  bg-[#e7e7e7] text-[#232323] rounded-full px-2 flex justify-center items-center gap-2"><AiOutlineClockCircle />3 years</span>
              </div>
              <h2 className="font-[500] text-[14px] py-[4px] text-[#1d1d1d]">2019-2022</h2>
            </div>
            <div className="w-full mt-[10px] text-[15px] text-[#454545]">
              <p>Graduated in Arts and Design from UFJF, I
                had contact with the areas of Design, Cinema
                and Audiovisual, Fashion, and Visual Arts.
                During this period, I absorbed content related
                to the arts and their reverberations.</p>
            </div>
            <a href="/docs/arts.pdf" target="_blank" className="self-start py-[10px] font-[400] text-[14px] underline text-[#858585]">University Degree</a>
          </div>

          <div className="opacity-90 bg-[#fafafa] border-[1px] border-[#ddd] mr-auto flex flex-col p-4 justify-between max-w-[600px] w-full rounded-[4px]">
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <h1 className="font-[600] text-[16px] text-[#121212]">Bacharelado em Cinema e
                  Audiovisual | UFJF</h1>
                <span className="text-nowrap max-h-[25px] font-[500] text-[14px]  bg-[#e7e7e7] text-[#232323] rounded-full px-2 flex justify-center items-center gap-2"><AiOutlineClockCircle />2 years</span>
              </div>
              <h2 className="font-[500] text-[14px] py-[4px] text-[#1d1d1d]">2022-2024</h2>
            </div>
            <div className="w-full mt-[10px] text-[15px] text-[#454545]">
              <p>As a Cinema and Audiovisual student, I have
                knowledge about screenwriting, montage
                and editing (of videos/films), film theory,
                among others. I have already produced some
                audiovisual content and films.</p>
            </div>
            {/* <a href="/docs/cinema.pdf" target="_blank" className="self-start py-[10px] font-[400] text-[14px] underline text-[#858585]">University Degree</a> */}
          </div>

          <div className="flex gap-5 justify-center py-5 items-center">
            <button className="bg-[#121212] text-white px-4 py-1 rounded-[30px]">Download CV</button>
            <button className="border-b-[1px] border-b-[#121212] flex gap-1 justify-center items-center h-fit"><AiOutlineEye className="font-[12px]"/> View CV</button>
          </div>

        </div>
      </div>
    </div>
  )
}
