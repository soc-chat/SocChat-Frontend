'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ChatSomeone from '../components/ChatSomeone';
import Timer from '../components/Timer';
import ContextMenu from '../components/ContextMenu';
import { Background, Chat, TopMenu, ChatContainer, ChatInput, SendImg, GlobalStyle, ChatTitle } from './page.style'
import WithWebSocket from './withWebSocket';

const ChatPage = ({messages, sendMessage}) => {
    const router = useRouter();
    const messageEndRef = useRef(null)

    const [message, setMessage] = useState('');
    const [contextMenu, setContextMenu] = useState(null); // null or { x, y, target }

    const handleContextMenu = (e, target) => {
        e.preventDefault();
        setContextMenu({ x: e.pageX, y: e.pageY, target });
    };

    const handleSendMessage = () => {
        setMessage(message.trim()); //양쪽 공백 제거
        if (message) {
          const chatMessage = {
            channel: 1, // Adjusted to a number (Long in backend)
            content: message, // Updated to match 'content' field in DTO
            isReply: false, // Assuming it's not a reply, adjust as needed
            userId: 1, // Assuming a fixed userId, update this as per your logic
            parentMessageId: null, // Assuming no parent message for now, update as needed
            type: "MESSAGE", // Adjusted to 'type' field, assuming "TEXT" as an example
          };
          sendMessage(chatMessage);
          setMessage('');
          document.getElementById('chat-input').focus();
        }
    }

    useEffect(()=>{
        messageEndRef.current.scrollIntoView({behavior: 'smooth'})//부드럽게 특정요소가 보이도록 스크롤
    }, [messages])

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handleSendMessage();
        }
    }

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
                <ChatContainer id="chat-messages" contextMenu={contextMenu} onScroll={()=>{setContextMenu(null)}} >
                    {
                        messages.map((item, index) => (
                            <ChatSomeone key={index} name={item.userId} message={item.content} handleContextMenu={handleContextMenu}/>
                        ))
                    }
                    <div ref={messageEndRef}></div>
                </ChatContainer>
                <ChatInput>
                    <input
                        id='chat-input'
                        type="text"
                        placeholder='메시지를 입력해주세요.'
                        onChange={(e) => { setMessage(e.target.value) }}
                        onKeyDown={handleKeyDown}
                        value={message}
                    />
                    <SendImg onClick={()=>{handleSendMessage()}}>
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

export default WithWebSocket(ChatPage, 1);
