'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ChatSomeone from '../components/ChatSomeone';
import Timer from '../components/Timer';
import ContextMenu from '../components/ContextMenu';
import { Background, Chat, TopMenu, ChatContainer, ChatInput, SendImg, GlobalStyle, ChatTitle } from './page.style'

const ChatPage = () => {
    const router = useRouter();
    const [message, setMessage] = useState('');

    const [contextMenu, setContextMenu] = useState(null); // null or { x, y, target }

    const handleContextMenu = (e, target) => {
        e.preventDefault();
        setContextMenu({ x: e.pageX, y: e.pageY, target });
    };


    return (
        <>
        <GlobalStyle />
        <Background>
            <Chat onContextMenu={(e)=>{e.preventDefault()}} onClick={()=>{setContextMenu(null)}}>
                <TopMenu>
                    <div className="left">
                        <button onClick={() => { router.push('/home') }}>
                            <Image src="/icons/arrow_left.png" alt="뒤로가기" width={30} height={30} />
                        </button>
                        <ChatTitle>테스트 채팅방</ChatTitle>
                    </div>
                    <Timer />
                </TopMenu>
                <ChatContainer onScroll={()=>{setContextMenu(null)}}>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} handleContextMenu={handleContextMenu} />
                    <ChatSomeone type={'me'} name={'감자튀김싫어'} message={'ㅁㄴㅇㄹㅁㄴㅇㄹ'} reaction={1} handleContextMenu={handleContextMenu}/>
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} handleContextMenu={handleContextMenu} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} handleContextMenu={handleContextMenu} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} handleContextMenu={handleContextMenu} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} handleContextMenu={handleContextMenu} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} handleContextMenu={handleContextMenu} />
                    <ChatSomeone type={'who'} name={'감자튀김빌런'} message={'감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다감자튀김 먹고싶다'} reaction={2} handleContextMenu={handleContextMenu} />
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
            {
                contextMenu && (
                    <div className='contextMenu' style={{ position: 'fixed', left: contextMenu.x, top: contextMenu.y, backgroundColor: 'white', color: 'black' }}>
                        <ContextMenu />
                    </div>
                )
            }
        </Background>
        </>
    )
}

export default ChatPage;
