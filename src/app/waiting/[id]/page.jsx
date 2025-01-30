'use client';

export const runtime = 'edge';

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import WithFetch from "./WithFetch";
import Waiting from "./WaitingPage";

const WaitingPageWithFetch = ({params}) => {
    const router = useRouter();
    const { id: channelId } = React.use(params);//비동기

    useEffect(() => {
        if (!channelId) {
            router.push('/home'); //channelId 없으면 홈으로
        }
    }, [channelId, router]);

    const WrappedWaitingPage = WithFetch(Waiting);

    return <WrappedWaitingPage channelId={channelId}/>
}

export default WaitingPageWithFetch;