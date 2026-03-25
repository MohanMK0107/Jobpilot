"use client"
import React, { useEffect } from 'react'
import useAppContext from '@/src/hooks/UseAppContext';
import Loader from './Loader';
import { usePathname } from "next/navigation";
import { Toaster } from 'react-hot-toast';
const Layoutwrapper = ({children}:{children:React.ReactNode}) => {
  const pathname = usePathname();
  const { loading, setLoading } = useAppContext();

  useEffect(() => {
    setLoading(false);
  }, [pathname]);
  return (
  <>
    {loading && 
      <div className='fixed z-90 inset-0 bg-white/50 flex items-center justify-center '>
        <Loader/>
      </div>
    }
    <Toaster position='top-right'/>
    {children}
  </>
  )
}

export default Layoutwrapper