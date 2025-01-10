'use client'

import './page.css';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Splash = () => {
  const router = useRouter();

  useEffect(() => {
    const splashTime = setTimeout(() => {
      router.push('/home');
    }, 3000); //3초

    return () => clearTimeout(splashTime);
  }, [router]);
  return(
    <div className="splash">
    <Image className="socchat_logo" src="/images/socchat_logo.png" alt="socchat logo"  width={130} height={130}/>
    </div>
  )
}

export default Splash;