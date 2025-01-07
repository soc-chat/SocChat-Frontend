'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import ChatSomeone from '../components/ChatSomeone';
import Timer from '../components/Timer';
import { Background, Chat, TopMenu, ChatContainer, ChatInput, SendImg, GlobalStyle } from './page.style'

const ChatPage = () => {
    const router = useRouter();
    const [message, setMessage] = useState('');

    return (
        <>
        <GlobalStyle />
        <Background>
            <Chat>
                <TopMenu>
                    <div className="left">
                        <button onClick={() => { router.push('/home') }}>
                            <Image src="/icons/arrow_left.png" alt="뒤로가기" width={30} height={30} />
                        </button>
                        <p className='chat_title'>테스트 채팅방</p>
                    </div>
                    <Timer />
                </TopMenu>
                <ChatContainer>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} />
                    <ChatSomeone type={'me'} name={'감자튀김싫어'} message={'ㅁㄴㅇㄹㅁㄴㅇㄹ'} reaction={1} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} />
                </ChatContainer>
                <ChatInput>
                    <input
                        type="text"
                        placeholder='메시지를 입력해주세요.'
                        onChange={(e) => { setMessage(e.target.value) }}
                        value={message}
                    />
                    <SendImg onClick={() => { console.log(message); setMessage('') }}>
                        <Image src="/icons/carbon_send-filled.png" alt="보내기" width={30} height={10} />
                    </SendImg>
                </ChatInput>
            </Chat>
        </Background>
        </>
    )
}

export default ChatPage;
