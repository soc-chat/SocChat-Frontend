import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css';

const Timer = () => {
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