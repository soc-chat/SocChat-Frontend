'use client';

import { useEffect, useState } from 'react';
import './RoomItem.css';
import { useRouter } from 'next/navigation';

const RoomItem = ({num, name, expireTime, channelId, startTime}) => {
    const router = useRouter();

    const [timeRemaining, setTimeRemaining] = useState(null); // expireTime을 상태로 관리
    const [startRoom, setStartRoom] = useState(false);

    const expire = Date.parse(expireTime);
    const start = Date.parse(startTime);

    useEffect(() => {
        const time = setInterval(() => {
            const current = new Date().getTime(); // 현재 시간을 밀리초로 얻기
            if(start<current)setStartRoom(true);
            setTimeRemaining(expire-current);
        }, 1000);

        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(time);
    }, [expire, timeRemaining]); // 처음


    const handleGoRoom = () => {
        if(startRoom){
            router.push(`/chat/${channelId}`)
        }
        else router.push(`/waiting/${channelId}`)
    }


    if(!timeRemaining)return
    return(
        <div className="roomItem" onClick={handleGoRoom}>
            <p className='num'>{num+1}</p>
            <div className="room_detail">
                <p style={{color:timeRemaining<=600000 ? '#FF3030' : '#3072FF', fontSize: '12px'}}>{timeRemaining<=600000 ? `💣${Math.floor(timeRemaining/60000)}분 남았어요` : `⌛ ${Math.floor(timeRemaining/60000)}분 남았어요`}</p>
                <p className="room_name">{name}</p>
            </div>
        </div>
    )
}

export default RoomItem;