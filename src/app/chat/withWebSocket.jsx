import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WithWebSocket = (ChatPage, channelId) => {
    return (props) => {
        const clientRef = useRef(null);
        const [messages, setMessages] = useState([]);

        const showMessage = (message) => {
            const parsedMessage = JSON.parse(message.body); // 메시지 파싱
            console.log('파싱된 메시지:', parsedMessage);

            setMessages((prev) => [...prev, parsedMessage]); // 상태 업데이트
        };

        useEffect(()=>{
            if(!channelId)return;

            const socket = new SockJS(process.env.NEXT_PUBLIC_WEBSOCKET_PORT);
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
                client.subscribe(`/sub/chat/room/${channelId}`, (message) => showMessage(message));
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
        }, [channelId])

        const sendMessage = (chatMessage) => {
            if (clientRef.current) {
                clientRef.current.publish({
                  destination: '/pub/send', // 메시지 전송 경로
                  body: JSON.stringify(chatMessage), // 메시지 내용을 JSON 문자열로 변환
                });
            }
        }

        return(
            <ChatPage 
                {...props}
                messages={messages}
                sendMessage={sendMessage}
            />
        )
    };
}

export default WithWebSocket;
