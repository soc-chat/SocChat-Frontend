'use client';

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import './Timer.css';

const StartTimer = ({startTime, channelId}) => {
    const router = useRouter();

    const [timeRemaining, setTimeRemaining] = useState(0);
    const start = Date.parse(startTime);

    useEffect(() => {
        const time = setInterval(() => {
            const current = new Date().getTime(); // 현재 시간을 밀리초로 얻기
            
            if(start<=current){//타임 아웃
                router.push(`/chat/${channelId}`);
            }
            setTimeRemaining(start-current);
        }, 1000);

        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(time);
    }, [start, timeRemaining]); // 처음
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

export default StartTimer;