import { Montserrat } from "next/font/google"
import "../styles/globals.css"
import { Providers } from "../components/Providers"
import { Menu } from "../components/Menu/Menu"
import { ProjectModal } from "../components/ProjectModal"
import { CurriculumModal } from "../components/CurriculumModal"

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function root_layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LuciLua Portfólio</title>
      </head>
      <body className={montserrat.className}>
        <Providers>
          <Menu />
          {children}
          <ProjectModal />
          <CurriculumModal />
        </Providers>
      </body>
    </html>
  )
}
