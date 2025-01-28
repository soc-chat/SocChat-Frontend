'use client';

import { useEffect, useState } from 'react';
import './RoomItem.css';

const RoomItem = ({num, name, expireTime}) => {
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
    }, [expire, timeRemaining]); // 처음

    return(
        <div className="roomItem">
            <p className='num'>{num+1}</p>
            <div className="room_detail">
                <p style={{color:timeRemaining<=600000 ? '#FF3030' : '#3072FF', fontSize: '12px'}}>{timeRemaining<=600000 ? `💣${Math.floor(timeRemaining/60000)}분 남았어요` : `⌛ ${Math.floor(timeRemaining/60000)}분 남았어요`}</p>
                <p className="room_name">{name}</p>
            </div>
        </div>
    )
}

export default RoomItem;