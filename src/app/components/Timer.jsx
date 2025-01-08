import Image from "next/image";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css';

const Timer = () => {
    //라이브러리 버전 문제로 아직 타이머는 구현되지 않았습니다.
    return(
        <div className="timer">
            <CountdownCircleTimer 
                isPlaying
                duration={10 * 60}
                colors={'#3072FF'}
                size={40}
                strokeWidth={3}
                trailColor="black"
            >
                {({remainingTime}) => (<div className="countdown">{Math.round(remainingTime/60)}</div>)}
            </CountdownCircleTimer>
        </div>
    )
}

export default Timer;