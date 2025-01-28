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
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        client.onConnect = function (frame) {
            console.log("Connected: " + frame);
            client.subscribe(`/sub/chat/room/${channelId}`, (message) => showMessage(message));
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

    const showRoomData = async () => {
        try {
            const res = await fetch(`https://socchat-api.mya.ong/room/${channelId}`);

            if (res.ok) {
                const data = await res.json();
                console.log('data: ', data);
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

    useEffect(() => {
        showRoomData();
    }, [channelId]);

    const sendMessage = (chatMessage) => {
        if (clientRef.current) {
            clientRef.current.publish({
                destination: '/pub/send',
                body: JSON.stringify(chatMessage),
            });
        }
    };

    return { messages, sendMessage, channelData, loading };
};

const WithWebSocket = (ChatPage) => {
    const withWebSocketDisplay = ({ channelId, ...props }) => {
        const { messages, sendMessage, channelData, loading } = useWebSocket(channelId);

        if (loading) {
            return <div>Loading...</div>; // 로딩 상태 표시
        }

        return (
            <ChatPage
                {...props}
                messages={messages}
                sendMessage={sendMessage}
                channelId={channelId}
                channelData={channelData}
            />
        );
    };

    withWebSocketDisplay.displayName = `WithWebSocket(${ChatPage.displayName || ChatPage.name})`
    return withWebSocketDisplay;
};

export default WithWebSocket;
