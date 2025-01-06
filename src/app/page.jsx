'use client';

import '../app/page.css';

import { useEffect, useState } from 'react';
const Ping = () => {
  const [messages, setMessages] = useState([]); // 수신된 메시지 상태
  const [isConnected, setIsConnected] = useState(false); // WebSocket 연결 상태
  const [sendmsg, setSendmsg] = useState('');
  const [Ws, setWS] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_PORT);
    setWS(ws);

    const sendMessage = {
      channel: 0,
      content: 'test',
      userId: '0',
      type: 'MESSAGE'
    }

    ws.onopen = () => {
      console.log('웹소캣 연결 성공');
      setIsConnected(true);

      const joinMessage = {
        type: "JOIN",
        channelId: 1234,
      };
      ws.send(JSON.stringify(joinMessage));

      ws.send(JSON.stringify(sendMessage))
      console.log('전송된 메시지:', sendMessage);

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


  const onclickSendMessage = () => {
    if (Ws && isConnected) {

      

      const sendMessage = {
        channel: 0,
        content: sendmsg,
        userId: '0',
        type: 'MESSAGE'
      }
  
      Ws.send(JSON.stringify(sendMessage))
      console.log('전송된 메시지:', sendMessage);
    } else {
      console.error('WebSocket 연결되지 않음');
    }
  };

  const handleSendMessage = (e) => {
    setSendmsg(e.target.value);
  }


  return (
    <div>
      <h1>Ping Message</h1>
      <p>{isConnected ? 'Connected' : 'Disconnected'}</p>
      <input onChange={handleSendMessage}/><button onClick={onclickSendMessage}>전송</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className='socket_message'>{message}</li> // 수신된 메시지 표시
        ))}
      </ul>
    </div>
  );
}

export default Ping;