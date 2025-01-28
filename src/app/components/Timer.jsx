import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";
import './Timer.css';

const Timer = ({expireTime}) => {
    const [timeRemaining, setTimeRemaining] = useState(0); // expireTime을 상태로 관리
    const expire = Date.parse(expireTime);

    useEffect(() => {
        const time = setInterval(() => {
            const current = new Date().getTime(); // 현재 시간을 밀리초로 얻기
            
            console.log('expire: ',expire);
            console.log('current: ',current);
            setTimeRemaining(expire-current);
            console.log(timeRemaining);
        }, 1000);

        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(time);
    }, []); // 처음
    return(
        <div className="timer">
            <CountdownCircleTimer 
                isPlaying
                duration={Math.floor(timeRemaining/6000)}
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