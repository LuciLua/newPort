import { InitialBox } from "../components/InitialBox"
import { Projeto } from "../components/Projeto"

export default function homepage() {
  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden  flex-col ">
      <div className="flex w-full max-w-[1300px] h-fit min-h-[100svh] px-[10px] pt-[120px]  items-center pb-[40px] mx-auto">
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
      </div>
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <h1 className="text-[35px] font-[700] pb-[20px]">Experiencia</h1>
        <div className="flex w-full justify-center gap-5 flex-wrap"></div>
      </div>
    </div>
  )
}
