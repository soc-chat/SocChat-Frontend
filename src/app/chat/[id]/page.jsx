'use client';

export const runtime = 'edge';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // App Router에서의 useRouter
import WithWebSocket from './withWebSocket';
import ChatPage from './ChatPage';

const ChatPageWithWebSocket = ({params}) => {
    const router = useRouter();
    const { id: channelId } = React.use(params);//비동기

    useEffect(() => {
        if (!channelId) {
            router.push('/home'); //channelId 없으면 홈으로
        }
    }, [channelId, router]);

    if (!channelId) return null;

    // WithWebSocket으로 ChatPage 감싸기
    const WrappedChatPage = WithWebSocket(ChatPage);

    return <WrappedChatPage channelId={channelId} />;
};

export default ChatPageWithWebSocket;
