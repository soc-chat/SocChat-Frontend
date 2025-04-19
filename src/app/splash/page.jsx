'use client'

import Image from 'next/image';
import { GlobalStyle } from '../boom/page.style';
import React from 'react';

import {SplashBackground } from './page.styled';

const Splash = () => {
    return(
            <>
                <GlobalStyle />
                <SplashBackground>
                    <Image style={{margin: 'auto'}} src="/images/socchat_logo.png" alt="socchat logo"  width={130} height={130}/>
                </SplashBackground>
            </>
    )
}

export default Splash;