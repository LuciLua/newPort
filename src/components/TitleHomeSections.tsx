'use client'

import { useTranslation } from "../hooks/useTranslation"

export function TitleHomeSections({ section }: { section: 'projects' | 'skills' | 'education' }) {


    const { translations } = useTranslation()

    let title;
    let h2;

    if (section === 'projects') {
        title = translations.projects.h1
        h2 = translations.projects.h2
    }
    if (section === 'skills') {
        title = translations.skills.h1
        h2 = translations.skills.h2
    }
    if (section === 'education') {
        title = translations.education.h1
        h2 = undefined
    }

    return (
        <>
            <h1 className="text-[35px] font-[700] ">{title}</h1>
            {h2 && <h2>{h2}</h2>}
        </>
    )
}