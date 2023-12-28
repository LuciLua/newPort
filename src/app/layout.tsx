import { Raleway } from "next/font/google"
import "../styles/globals.css"
import { Providers } from "../components/Providers"

const raleway = Raleway({ subsets: ["latin-ext"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function root_layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>LuciLua Portfólio</title>
            </head>
            <body className={raleway.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}