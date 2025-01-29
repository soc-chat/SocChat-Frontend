import { useState, useEffect } from 'react';

const useFetch = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const showRoom = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}`);
                
                if (res.ok) {
                    const data = await res.json();
                    console.log('data: ', data);
                    setRooms(data);
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.log(error);
            }
        };

        showRoom();
        const interval = setInterval(showRoom, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return rooms;
};

const WithFetch = (HomePage) => {
    const WithFetchDisplay = (props) => {
        const rooms = useFetch(); 

        return <HomePage {...props} rooms={rooms} />;
    };

    WithFetchDisplay.displayName = `WithFetch(${HomePage.displayName || HomePage.name})`
    return WithFetchDisplay;
};

export default WithFetch;
