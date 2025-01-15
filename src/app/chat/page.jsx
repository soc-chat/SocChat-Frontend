'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ChatSomeone from '../components/ChatSomeone';
import Timer from '../components/Timer';
import ContextMenu from '../components/ContextMenu';
import { Background, Chat, TopMenu, ChatContainer, ChatInput, SendImg, GlobalStyle, ChatTitle } from './page.style'

import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const ChatPage = () => {
    const router = useRouter();
    const clientRef = useRef(null);
    const messageEndRef = useRef(null)

    const [messages, setMessages] = useState([]);

    const [message, setMessage] = useState('');

    const [contextMenu, setContextMenu] = useState(null); // null or { x, y, target }

    const showMessage = (message) => {
        const parsedMessage = JSON.parse(message.body); // 메시지 파싱
        console.log('파싱된 메시지:', parsedMessage);

        setMessages((prev) => [...prev, parsedMessage]); // 상태 업데이트
    };

    useEffect(()=>{
        const socket = new SockJS('https://socchat-api.mya.ong/stomp/chat');
        const client = new Client({
            webSocketFactory: () => socket,
            connectHeaders: {},
            debug: function (str) {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        })

        client.onConnect = function (frame) {
            console.log("Connected: " + frame);
            client.subscribe("/sub/chat/room/1", (message) => showMessage(message));
        };
    

        client.onDisconnect = () => {
            console.log('웹소켓 disconnect');
        }
        
        //활성화
        client.activate();
        clientRef.current = client;

        return () => { 
            client.deactivate();
        }
    }, [])

    const handleContextMenu = (e, target) => {
        e.preventDefault();
        setContextMenu({ x: e.pageX, y: e.pageY, target });
    };

    const sendMessage = () => {

        setMessage(message.trim()); //양쪽 공백 제거

        if (message && clientRef) {
          const chatMessage = {
            channel: 1, // Adjusted to a number (Long in backend)
            content: message, // Updated to match 'content' field in DTO
            isReply: false, // Assuming it's not a reply, adjust as needed
            userId: 1, // Assuming a fixed userId, update this as per your logic
            parentMessageId: null, // Assuming no parent message for now, update as needed
            type: "MESSAGE", // Adjusted to 'type' field, assuming "TEXT" as an example
          };
          clientRef.current.publish({
            destination: "/pub/send",
            body: JSON.stringify(chatMessage),
          });

          setMessage('');
          document.getElementById('chat-input').focus();
        }
    }

    useEffect(()=>{
        messageEndRef.current.scrollIntoView({behavior: 'smooth'})//부드럽게 특정요소가 보이도록 스크롤
    }, [messages])

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            sendMessage();
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
                <ChatContainer id="chat-messages" onScroll={()=>{setContextMenu(null)}} >
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
                    <SendImg onClick={()=>{sendMessage()}}>
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
