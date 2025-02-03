import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

//리액트 훅은 컴포넌트 내부에서만 호출할 수 있기 때문에 HOC에서 사용하는 것은 React의 규칙에 맞지 않음
// 따라서 useWebSocket을 따로 만듦
const useWebSocket = (channelId) => {
    const clientRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sessionId, setSessionId] = useState('');

    const showMessage = (message) => {
        const parsedMessage = JSON.parse(message.body);
        setMessages((prev) => [...prev, parsedMessage]);
    };

    useEffect(() => {
        if (!channelId) return;

        const socket = new SockJS(process.env.NEXT_PUBLIC_WEBSOCKET_PORT);
        const client = new Client({
            webSocketFactory: () => socket,
            connectHeaders: {},
            debug: function (str) {
                // console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        client.onConnect = function (frame) {
            // console.log("Connected: " + frame);

            //세션 아이디 구독 (1회 메시지 받은 후 구독 취소)
            const sessionSub = client.subscribe(`/user/sub/info`, (message) => {
                setSessionId(message.body);
                
                setTimeout(()=> {
                    sessionSub.unsubscribe();
                }, 500);
            });

            //세션아이디 받기위해 메시지 전송
            client.publish({
                destination: '/pub/info',
                body: ''
            })

            //채팅 메시지 구독
            const chatSub = client.subscribe(`/sub/chat/room/${channelId}`, (message) => showMessage(message));

        };

        client.onDisconnect = () => {
            console.log('웹소켓 disconnect');
        };

        client.activate();
        clientRef.current = client;

        return () => {
            client.deactivate();
        };
    }, [channelId]);

    

    useEffect(() => {
        const showRoomData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/${channelId}`);
    
                if (res.ok) {
                    const data = await res.json();
                    setChannelData(data);
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (channelId) {
            setLoading(true);
            showRoomData();
        }
    }, [channelId]);

    const sendMessage = (chatMessage) => {
        if (clientRef.current) {
            clientRef.current.publish({
                destination: '/pub/send',
                body: JSON.stringify(chatMessage),
            });
        }
    };

    return { messages, sendMessage, channelData, loading, sessionId };
};

const WithWebSocket = (ChatPage) => {
    const WithWebSocketDisplay = ({ channelId, ...props }) => {
        const { messages, sendMessage, channelData, loading, sessionId } = useWebSocket(channelId);

        if (loading) {
            return
        }

        return (
            <ChatPage
                {...props}
                messages={messages}
                sendMessage={sendMessage}
                channelId={channelId}
                channelData={channelData}
                sessionId={sessionId}
            />
        );
    };

    WithWebSocketDisplay.displayName = `WithWebSocket(${ChatPage.displayName || ChatPage.name})`
    return WithWebSocketDisplay;
};

export default WithWebSocket;
