'use client'

import { usePathname, useRouter } from "next/navigation"

export function BtnToggleLocale() {

    const pathname = usePathname()
    const router = useRouter()

    function toggleTranslateLanguage(lang: string) {
        const pathname_split = pathname.split('/')
        pathname_split[1] = lang
        const novoPathname = pathname_split.join('/');
        router.push(novoPathname)
    }


    return (
        <div className="">
            <div className="w-fit gap-4 flex ">
                <button onClick={() => toggleTranslateLanguage("en")} className="bg-neutral-50 text-neutral-600 p-2 rounded-sm border-neutral-100 border-[1px]">EN</button>
                <button onClick={() => toggleTranslateLanguage("pt")} className="bg-neutral-50 text-neutral-600 p-2 rounded-sm border-neutral-100 border-[1px]">PT</button>
                <button onClick={() => toggleTranslateLanguage("fr")} className="bg-neutral-50 text-neutral-600 p-2 rounded-sm border-neutral-100 border-[1px]">FR</button>
            </div>
        </div>
    )
}