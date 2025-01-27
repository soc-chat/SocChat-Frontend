'use client';

import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WithWebSocket = (HomePage) => {
    return (props) => {
        const clientRef = useRef(null);
        const [rooms, setRooms] = useState([]);

        const showRoom = (rooms) => {
            const parsedRoom = JSON.parse(rooms.body); // 메시지 파싱
            console.log('파싱된 메시지:', parsedRoom);

            setRooms((prev) => [...prev, parsedRoom]); // 상태 업데이트
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
                client.subscribe(`/sub/chat/room`, (rooms) => showRoom(rooms));
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

        return(
            <ChatPage 
                {...props}
                rooms={rooms}
            />
        )
    };
}

export default WithWebSocket;
