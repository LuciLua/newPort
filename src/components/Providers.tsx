"use client"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LocaleContextProvider } from '../app/contexts/LocaleContext';

export function Providers({ children }) {
  return (
    <>
      <LocaleContextProvider>
        {children}
        <ToastContainer className={'z-40'} />
      </LocaleContextProvider>
    </>
  )
}
