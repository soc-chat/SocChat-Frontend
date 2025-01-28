import { useState, useEffect } from 'react';

const useFetch = () => {
    const [rooms, setRooms] = useState([]);

    

    useEffect(() => {
        const showRoom = async () => {
            try {
                const res = await fetch('https://socchat-api.mya.ong/room');
                
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
    const withFetchDisplay = (props) => {
        const rooms = useFetch(); 

        return <HomePage {...props} rooms={rooms} />;
    };

    withFetchDisplay.displayName = `WithFetch(${HomePage.displayName || HomePage.name})`
    return withFetchDisplay;
};

export default WithFetch;
