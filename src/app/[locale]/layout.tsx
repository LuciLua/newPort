import { Montserrat } from "next/font/google"
import "../../styles/globals.css"
import { Providers } from "../../components/Providers"
import { Menu } from "../../components/Menu/Menu"
import { ProjectModal } from "../../components/ProjectModal"
import { CurriculumModal } from "../../components/CurriculumModal"
import { notFound } from "next/navigation"

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const locales = ['en', 'pt', 'fr']

export default function root_layout({ children, params }) {


  const { locale } = params
  if (!locales.includes(locale)) {
    notFound()
  }


  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LuciLua Portfólio</title>
      </head>
      <body className={montserrat.className}>
        <Providers params={params}>
          <Menu />
          {children}
          <ProjectModal />
          <CurriculumModal />
        </Providers>
      </body>
    </html>
  )
}
