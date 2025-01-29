import { useState, useEffect } from 'react';

const useFetch = () => {
    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const showRoom = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/1`);
                
                if (res.ok) {
                    const data = await res.json();
                    console.log('data: ', data);
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
    }, []);

    return {room, loading};
};

const WithFetch = (Waiting) => {
    const WithFetchDisplay = (props) => {
        const {room, loading} = useFetch(); 

        if(loading){
            return <div>Loading...</div>; // 로딩 상태 표시
        }

        return <Waiting {...props} room={room} />;
    };

    WithFetchDisplay.displayName = `WithFetch(${Waiting.displayName || Waiting.name})`
    return WithFetchDisplay;
};

export default WithFetch;
