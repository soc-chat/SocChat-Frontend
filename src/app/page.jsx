'use client';

import '../app/page.css';

import { useEffect, useState } from 'react';
const Ping = () => {
  const [messages, setMessages] = useState([]); // 수신된 메시지 상태
  const [isConnected, setIsConnected] = useState(false); // WebSocket 연결 상태

  useEffect(() => {
    const ws = new WebSocket('ws://152.70.251.65:10001/ws/chat');

    ws.onopen = () => {
      console.log('웹소캣 연결 성공');
      setIsConnected(true);
    };

    ws.onmessage = (e) => {
      //const data = JSON.parse(e.data);
      console.log('Raw message from server:', e.data);
      const data = setMessages((prev) => [...prev, e.data])
    //   if (e.type === 'PING') {
    //     setMessages((prev) => [...prev, e.content]); 
    //   }
    };

    ws.onclose = () => {
      console.log('웹소켓 연결 종료');
      setIsConnected(false);
    };

    ws.onerror = (error) => {
      console.error('에러발생:', error);
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <h1>Ping Message</h1>
      <p>{isConnected ? 'Connected' : 'Disconnected'}</p>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className='socket_message'>{message}</li> // 수신된 메시지 표시
        ))}
      </ul>
    </div>
  );
}


export default Ping;