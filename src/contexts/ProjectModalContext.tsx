'use client'

import { createContext, useState } from "react";

export const ProjectModalContext = createContext<any>({})

export function ProjectModalContextProvider({ children }) {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<any>({})

    function toggleModalOpen() {
        setModalOpen(!modalOpen)
    }

    return (
        <ProjectModalContext.Provider value={{ modalOpen, toggleModalOpen, modalContent, setModalContent }}>
            {children}
        </ProjectModalContext.Provider>
    )

}