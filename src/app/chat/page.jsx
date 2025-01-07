'use client';

import { useRouter } from 'next/navigation';
import './page.css';
import ChatSomeone from '../components/ChatSomeone';
import Image from 'next/image';
import Timer from '../components/Timer';
import { useState } from 'react';

const Chat = () => {
    const router = useRouter();

    const [message, setMessage] = useState('');
    return(
        <div className="background">
            <div className="chat">
                <div className="top_menu">
                    <div className="left">
                        <button onClick={()=>{router.push('/home')}}><Image src="/icons/arrow_left.png" alt="뒤로가기" width={30} height={30}/></button>
                        <p className='chat_title'>테스트 채팅방</p>
                    </div>
                    <Timer />
                </div>
                <div className="chat_container">
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2}/>
                    <ChatSomeone type={'me'} name={'감자튀김싫어'} message={'ㅁㄴㅇㄹㅁㄴㅇㄹ'} reaction={1}/>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2}/>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2}/>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2}/>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2}/>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2}/>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2}/>
                </div>
                <div className="chat_input">
                    <input type="text" placeholder='메시지를 입력해주세요.' onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
                    <button className="send_img" onClick={()=>{console.log(message); setMessage('')}}>
                        <Image src="/icons/carbon_send-filled.png" alt="보내기" width={30} height={10} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat;