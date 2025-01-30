import { useState, useEffect } from 'react';

const useFetch = (channelId) => {
    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const showRoom = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/${channelId}`);
                
                if (res.ok) {
                    const data = await res.json();
                    setRoom(data);
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        };

        setLoading(true);
        showRoom();
        const interval = setInterval(showRoom, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [channelId]);

    return {room, loading};
};

const WithFetch = (Waiting) => {
    const WithFetchDisplay = ({channelId,...props}) => {
        const {room, loading} = useFetch(channelId); 

        if(loading){
            return
        }

        return <Waiting {...props} room={room} />;
    };

    WithFetchDisplay.displayName = `WithFetch(${Waiting.displayName || Waiting.name})`
    return WithFetchDisplay;
};

export default WithFetch;
