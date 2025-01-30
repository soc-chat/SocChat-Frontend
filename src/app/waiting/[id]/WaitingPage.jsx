'use client'

import './page.css'
import StartTimer from '../../components/StartTimer';
import MainButton from '../../components/MainButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Waiting = ({room}) => {
    const router = useRouter();

    const [timeRemaining, setTimeRemaining] = useState(0);
    const start = Date.parse(room.startTime);

    console.log(room);
    useEffect(() => {
        if(!room.name){
            alert('존재하지않는 채팅방입니다.');
            router.push('/home');
        }
    },[room])

    useEffect(() => {
        const time = setInterval(() => {
            const current = new Date().getTime(); // 현재 시간을 밀리초로 얻기
            setTimeRemaining(start-current);
        }, 1000);

        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(time);
    }, [start, timeRemaining]); // 처음

    return(
        <div className="background">
        <div className="waiting">
            <div className="timer">
                <StartTimer startTime={room.startTime} channelId={room.id}/>
            </div>
            <div className="announce">
                <Image src="/icons/announce_icon.png" alt="공지" width={14} height={10}/>
                <p>공지 - 새벽 1시~5시까지 서버 점검 예정입니다.</p>
            </div>
            <div className="desc">
                <div className="desc_text">
                    <p className='desc_bold'>채팅방이<br /><span style={{color:'#3072FF'}}>{Math.floor(timeRemaining/6000)>0 ? Math.floor(timeRemaining/6000) : 0}분 뒤</span>에 열립니다!</p>
                    <p style={{color:'#a8a8a8'}}>채팅방은 특정 시간 후에 닫히고, 열려요</p>
                    <p style={{color:'#a8a8a8'}}>진짜 익명 채팅방, 함께 즐겨봐요!</p>
                </div>
                <div className='socchat_logo'>
                    <Image src="/images/socchat_logo_dark.png" alt="로고입니다" width={130} height={130}/>
                </div>
                <div className="mainbtn">
                    <MainButton color={'#4c4c4c'} textColor={'#a8a8a8'} value={'나가기'} onClick={()=>{router.push('/home')}}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Waiting;