import { InitialBox } from "../components/InitialBox"
import { Projeto } from "../components/Projeto"
import { AiOutlineArrowRight } from "react-icons/ai"

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
            url={"https://www.curtahidrofobia.com/"}
            stack={["reactJS", "nextJS", "tailwindcss"]}
          />
          <Projeto
            name={"Somuuh"}
            img={"/assets/projects/somuuh.png"}
            url={"https://www.somuuh.vercel.app/"}
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
        <div className="w-full px-[68px] flex justify-center items-center border-b-[1px] py-4 ">
          <button className="w-full h-fit  font-[700] p-4 rounded-[3px] bg-gradient-to-br from-[#b5b5b52a] to-transparent flex justify-center items-center gap-3 ">Discovery more projects <AiOutlineArrowRight /></button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <h1 className="text-[35px] font-[700] pb-[20px]">Educação</h1>
        <div className="flex w-full justify-center gap-5 flex-wrap">
          <div className="flex p-2 justify-between">
            <div className="flex flex-col">
              <h1>Curso Web Moderno Completo - Udemy</h1>
              <h2>2021-2023</h2>
            </div>
            <div className="">
              <p>In this course, I learned about Javascript, Web
                Concepts, HTML and CSS, Ajax, Webpack,
                jQuery, Bootstrap, React, VueJs, Electron,
                Angular 9, Database (relational and NoSQL)
                and Express.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
