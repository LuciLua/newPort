import { ViewCV } from "../../components/Btns/ViewCV"
import { CurriculumModal } from "../../components/CurriculumModal"
import { EducationBox } from "../../components/EducationBox"
import { InitialBox } from "../../components/InitialBox"
import { Projeto } from "../../components/Projeto"
import { AiOutlineArrowRight, AiOutlineEye } from "react-icons/ai"

export default function homepage() {
  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden  flex-col ">
      <div className="flex w-full max-w-[1300px] h-fit xl:max-h-fit xl:min-h-[900px] xl:h-fit px-[10px] pt-[120px]  items-center pb-[40px] mx-auto">
        {/* <h1 className="font-black text-[30px]">{lang}</h1> */}
        <InitialBox />
      </div>
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <h1 className="text-[35px] font-[700] ">Projects</h1>
        <h2>Some highlighted projects</h2>
        <div className="my-[40px] flex w-full justify-center gap-12 flex-wrap transform perspective-3d">
          <Projeto
            key={"hidrofobia"}
            name={"Hidrofobia"}
            img={"/assets/projects/hidrofobia.png"}
            url={"https://curtahidrofobia.com/"}
            stack={["reactJS", "nextJS", "tailwindcss"]}
            description="Hidrofobia is a website developed with the purpose of promoting the film that I produced and directed. Not just publicizing, but being a means of raising funds for the film's production through a personalized and exclusive form integrated with Google Forms. In this project there is also a gallery of behind-the-scenes photos from the recording days."
          />
          <Projeto
            key={"Somuuh"}
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
            description="Somuuh is a social network project focused on working with authentication and design. Exploring references such as Instagram, Twitter and Spotify."
          />
          <Projeto
            key={"Notein"}
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
            description="NoteIn is a project in which I focused on working with authentication with a non-real database (mongoDB)"
          />
          <Projeto
            key={"Pokedex"}
            name={"Pokedex"}
            img={"/assets/projects/pokedex.png"}
            url={"https://pokedeex.vercel.app/"}
            stack={["reactJS", "nextJS", "sass"]}
            description="Pokedex is a project that aims to bring together all the pokemons in one place, with their information, such as abilities (in bars) and images"
          />
          <Projeto
            key={"ToDo"}
            name={"ToDo"}
            img={"/assets/projects/todo.png"}
            url={"https://todo-lucilua.vercel.app/"}
            stack={["reactJS", "nextJS", "sass", "typescript", "localStorage"]}
            description="ToDo is a web application that seeks to store items defined by the user in the browser, mark them as completed or even remove them. React, Next.js, LocalStorage, Typescript and SASS were used."
          />
          <Projeto
            key={"Compare"}
            name={"Compare"}
            img={"/assets/projects/compare.png"}
            url={"https://compare-orpin.vercel.app/"}
            stack={["reactJS", "nextJS", "sass", "typescript", "axios"]}
            description="Compare is an application that compares a list of followers of a user on github with the list of people that this user follows, generating two other lists: that of users that the current user follows but does not follow him back, and that of users that the current user does not follow but follow him. Generating a link for each user profile in these two lists, allowing you to follow or unfollow users."
          />
        </div>
        <div className="w-full flex justify-center items-center border-b-[1px] max-w-[1150px] mx-auto pb-[20px]">
          <button className="w-full h-fit  font-[700] p-4 rounded-[3px] bg-gradient-to-br from-[#b5b5b52a] to-transparent flex justify-center items-center gap-3 ">
            Discovery more projects <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <h1 className="text-[35px] font-[700] pb-[20px]">Education</h1>
        <div className="flex w-full justify-center gap-5 flex-wrap p-[20px]">
          <EducationBox
            titleCourse="Curso Web Moderno Completo - Udemy"
            timeConclusion="97 hours"
            dateConclusion="2021-2023"
            courseDescription="In this course, I learned about Javascript, Web Concepts, HTML and CSS, Ajax Webpack, jQuery, Bootstrap, React, VueJs, Electron, Angular 9, Database (relational and NoSQL) and Express."
            credential
            credentialLink="https://www.udemy.com/certificate/UC-495b9d41-0005-46b2-9530-dae148592fa8/"
            credentialLabel="Credentials"
          />
          <EducationBox
            style="opacity-90 xl:max-w-[600px]"
            titleCourse="Bacharelado Interdisciplinar em Artes e Design | UFJF"
            timeConclusion="3 years hours"
            dateConclusion="2019-2022"
            courseDescription="Graduated in Arts and Design from UFJF, I had contact with the areas of Design, Cinema and Audiovisual, Fashion, and Visual Arts. During this period, I absorbed content related to the arts and their reverberations."
            credential
            credentialLink="/docs/arts.pdf"
            credentialLabel="University Degree"
            moreText
          />
          <EducationBox
            style="opacity-90 xl:max-w-[600px]"
            titleCourse="Bacharelado em Cinema e Audiovisual | UFJF"
            timeConclusion="2 years"
            dateConclusion="2022-2024"
            courseDescription="As a Cinema and Audiovisual student I have knowledge about screenwriting, montage and editing (of videos/films), film theory, among others. I have already produced some audiovisual content and films."
            moreText
          />

          <div className="flex gap-5 justify-center py-5 items-center w-full">
            <a
              href="/assets/cv/curriculum.pdf"
              className="bg-[#121212] text-white px-4 py-1 rounded-[30px]"
            >
              Download CV
            </a>
            <ViewCV />
            <CurriculumModal />
          </div>
        </div>
      </div>
    </div>
  )
}
