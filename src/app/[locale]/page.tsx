import {
  BiLogoAngular,
  BiLogoCss3,
  BiLogoGit,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
  BiWorld,
} from "react-icons/bi"
import {
  SiAdobeindesign,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiPython
} from "react-icons/si"
import { ViewCV } from "../../components/Btns/ViewCV"
import { CurriculumModal } from "../../components/CurriculumModal"
import { EducationBox } from "../../components/EducationBox"
import { InitialBox } from "../../components/InitialBox"
import { Project } from "../../components/Project"
import { AiOutlineArrowRight } from "react-icons/ai"

import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { HorizontalScrolling } from "../../components/HorizontalScrolling"
import { TitleHomeSections } from "../../components/TitleHomeSections"

export default function homepage() {
  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden flex-col bg-[var(--bg-default)] ">
      <div className="flex w-full max-w-[1300px] h-fit xl:max-h-fit xl:min-h-[900px] xl:h-fit px-[10px] pt-[80px]  items-center pb-[40px] mx-auto">
        <InitialBox />
      </div>
      {/* Projects Section */}
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <TitleHomeSections section="projects" />
        <div className="my-[40px] flex w-full justify-center gap-12 flex-wrap transform perspective-3d">
          <Project
            key={"hidrofobia"}
            name={"Hidrofobia"}
            img={"/assets/projects/hidrofobia.png"}
            url={"https://curtahidrofobia.com/"}
            stack={["reactJS", "nextJS", "tailwindcss"]}
            description="Hidrofobia is a website developed with the purpose of promoting the film that I produced and directed. Not just publicizing, but being a means of raising funds for the film's production through a personalized and exclusive form integrated with Google Forms. In this project there is also a gallery of behind-the-scenes photos from the recording days."
          />
          <Project
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
          <Project
            key={"Notein"}
            name={"NoteIn"}
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
          <Project
            key={"Pokedex"}
            name={"Pokedex"}
            img={"/assets/projects/pokedex.png"}
            url={"https://pokedeex.vercel.app/"}
            stack={["reactJS", "nextJS", "sass"]}
            description="Pokedex is a project that aims to bring together all the pokemons in one place, with their information, such as abilities (in bars) and images"
          />
          <Project
            key={"ToDo"}
            name={"ToDo"}
            img={"/assets/projects/todo.png"}
            url={"https://todo-lucilua.vercel.app/"}
            stack={["reactJS", "nextJS", "sass", "typescript", "localStorage"]}
            description="ToDo is a web application that seeks to store items defined by the user in the browser, mark them as completed or even remove them. React, Next.js, LocalStorage, Typescript and SASS were used."
          />
          <Project
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
      {/* Education Section */}
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <TitleHomeSections section="education" />
        <div className="flex w-full justify-center gap-5 flex-wrap p-[20px]">
          <EducationBox
            key={'course_1'}
            titleCourse="Curso Web Moderno Completo - Udemy"
            timeConclusion="97 hours"
            dateConclusion="2021-2023"
            courseDescription="In this course, I learned about Javascript, Web Concepts, HTML and CSS, Ajax Webpack, jQuery, Bootstrap, React, VueJs, Electron, Angular 9, Database (relational and NoSQL) and Express."
            credential
            credentialLink="https://www.udemy.com/certificate/UC-495b9d41-0005-46b2-9530-dae148592fa8/"
            credentialLabel="Credentials"
          />
          <EducationBox
            key={'course_2'}
            style="opacity-90 xl:max-w-[600px]"
            titleCourse="Bacharelado Interdisciplinar em Artes e Design | UFJF"
            timeConclusion="3 years"
            dateConclusion="2019-2022"
            courseDescription="Graduated in Arts and Design from UFJF, I had contact with the areas of Design, Cinema and Audiovisual, Fashion, and Visual Arts. During this period, I absorbed content related to the arts and their reverberations."
            credential
            credentialLink="/docs/arts.pdf"
            credentialLabel="University Degree"
            moreText
          />
          <EducationBox
            key={'course_3'}
            style="opacity-90 xl:max-w-[600px]"
            titleCourse="Bacharelado em Cinema e Audiovisual | UFJF"
            timeConclusion="2 years"
            dateConclusion="2022-2024"
            courseDescription="As a Cinema and Audiovisual student I have knowledge about screenwriting, montage and editing (of videos/films), film theory, among others. I have already produced some audiovisual content and films."
            moreText
          />

          <div className="flex gap-5 justify-center pt-10 items-center w-full">
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
      {/* Skills Section */}
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <TitleHomeSections section="skills" />
        <div className="flex justify-around py-10 w-full xl:flex-row flex-col items-start gap-5">
          <ul className="w-full xl:w-full flex flex-wrap xl:justify-start justify-center gap-4 border-[1px] border-[#1212212] rounded-[12px]">
            <h3 className="font-[600] text-[20px] py-4 w-full justify-center items-center flex bg-[var(--bg-medium)] text-[var(--text-h1)] rounded-tl-[12px] rounded-tr-[12px]">
              Backend
            </h3>
            <div className="p-5 flex flex-wrap xl:justify-start justify-evenly gap-3">
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoNodejs className="text-[30px]" />
                NodeJs
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoJavascript className="text-[30px]" />
                JavaScript
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiExpress className="text-[30px]" />
                Express
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiPostgresql className="text-[30px]" />
                Postgresql
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiMysql className="text-[30px]" />
                MySQL
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiMongodb className="text-[30px]" />
                MongoDB
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiPython className="text-[30px]" />
                Python
              </li>
            </div>
          </ul>
          <ul className="w-full xl:w-full   flex flex-wrap  justify-center gap-4 border-[1px] relative border-[#1212212] rounded-[12px]">
            <h3 className="font-[600] text-[20px] py-4 w-full justify-center items-center flex text-[var(--bg-default)] bg-[var(--text-h1)] rounded-tl-[12px] rounded-tr-[12px]">
              Frontend
            </h3>
            <h4 className="bg-[#fff] text-[#121212] rounded-[30px] px-5 border-[3px] font-[700] text-[15px] border-[#121212] absolute top-[-12px] w-fit h-fit">
              Main
            </h4>
            <div className="p-5 flex flex-wrap xl:justify-start justify-evenly gap-3">
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoHtml5 className="text-[30px]" />
                HTML
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoCss3 className="text-[30px]" />
                CSS
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoTailwindCss className="text-[30px]" />
                TailwindCSS
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoTypescript className="text-[30px]" />
                Typescript
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoReact className="text-[30px]" />
                React
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoAngular className="text-[30px]" />
                AngularJs
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoVuejs className="text-[30px]" />
                VueJs
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiNextdotjs className="text-[30px]" />
                NextJs
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoJavascript className="text-[30px]" />
                JavaScript
              </li>
            </div>
          </ul>
          <ul className="w-full xl:w-full   flex flex-wrap xl:justify-start justify-center gap-4  border-[1px] border-[#1212212] rounded-[12px]">
            <h3 className="font-[600] text-[20px] py-4 w-full justify-center items-center flex bg-[var(--bg-medium)] text-[var(--text-h1)] rounded-tl-[12px] rounded-tr-[12px]">
              Others
            </h3>
            <div className="p-5 flex flex-wrap xl:justify-start justify-evenly gap-3">
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoGit className="text-[30px]" />
                Git
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiLogoGithub className="text-[30px]" />
                GitHub
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <BiWorld className="text-[30px]" /> SEO
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiNpm className="text-[30px]" /> NPM and Yarn
              </li>
              <li className="border-[1px] border-[var(--border-medium)] rounded-[30px] flex text-[16px] justify-center items-center gap-2 px-2 text-[var(--text-h2)]">
                <SiAdobeindesign className="text-[30px]" /> UI/UX Design
              </li>
            </div>
          </ul>
        </div>
      </div>
      <p className="xl:text-[18px] text-nowrap text-sm w-full h-fit flex justify-center items-center font-[500] py-4 bg-black text-[#fff]">
        <span className="underline mr-1 flex gap-2 justify-center items-center">
          <IoChatbubbleEllipsesOutline /> Talk to me
        </span>{" "}
        and I can tell you about my{" "}
        <span className="bg-[#121212] text-[#fff]  ml-1 px-1 rounded-[3px]">
          soft skills!
        </span>
      </p>
      <HorizontalScrolling />
      <div className="h-[100dvh] bg-white flex justify-center items-center">
        <h1>Hello, World</h1>
      </div>
    </div>
  )
}
