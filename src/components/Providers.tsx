"use client"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LocaleContextProvider } from '../contexts/LocaleContext';
import { ProjectModalContextProvider } from '../contexts/ProjectModalContext';

export function Providers({ children }) {
  return (
    <>
      <LocaleContextProvider>
        <ProjectModalContextProvider>
          {children}
          <ToastContainer className={'z-40'} />
        </ProjectModalContextProvider>
      </LocaleContextProvider>
    </>
  )
}
