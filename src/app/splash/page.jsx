import { GlobalStyle } from '../boom/page.style';
import './page.css';

import { SplashBackground } from './page.styled';

const Splash = () => {
    return(
            <>
                <GlobalStyle />
                <SplashBackground>
                    <Logo src="/images/socchat_logo.png" alt="socchat logo"  width={130} height={130}/>
                </SplashBackground>
            </>
    )
}

export default Splash;