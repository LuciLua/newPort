"use client"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }) {
  return (
    // Providers here
    <>
      {children}
      <ToastContainer className={'z-40'} />
    </>
  )
}
