'use client'

import { useContext } from "react"
import { ProjectModalContext } from "../contexts/ProjectModalContext"

export function useProjectModal() {
    const { modalOpen, toggleModalOpen, setModalContent, modalContent } = useContext(ProjectModalContext)

    return { modalOpen, toggleModalOpen, setModalContent, modalContent }
}