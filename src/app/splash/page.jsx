import './page.css';
import Image from 'next/image';

const Splash = () => {
    return(
            <div className="splash">
                <Image className="socchat_logo" src="/images/socchat_logo.png" alt="socchat logo"  width={130} height={130}/>
            </div>
    )
}

export default Splash;