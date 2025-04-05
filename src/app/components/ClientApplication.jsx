'use client'

import { useEffect } from "react";

export default function CliendApplication({children}){
    useEffect(() => {
        const setScreenSize = () =>{
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    
        setScreenSize();
        window.addEventListener('resize', setScreenSize);
    
        return () => {
          window.removeEventListener('resize', setScreenSize);
        }
      }, [])

      return children;
}