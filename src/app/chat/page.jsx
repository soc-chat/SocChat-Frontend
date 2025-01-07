'use client';

import { useRouter } from 'next/navigation';
import './page.css';
import ChatSomeone from '../components/ChatSomeone';
import Image from 'next/image';

const Chat = () => {
    const router = useRouter();
    return(
        <div className="background">
            <div className="chat">
                <div className="top_menu">
                    <div className="left">
                        <button onClick={()=>{router.push('/home')}}><Image src="/icons/arrow_left.png" alt="뒤로가기" width={30} height={30}/></button>
                        <p className='chat_title'>테스트 채팅방</p>
                    </div>
                    <Image src="/images/timer(test).png" alt="타이머(임시)" width={42} height={42}/>
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
            </div>
        </div>
    )
}

export default Chat;