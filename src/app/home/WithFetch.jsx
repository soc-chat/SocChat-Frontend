import { useState, useEffect, useRef } from 'react';

const WithFetch = (HomePage) => {
    return (props) => {
        const [rooms, setRooms] = useState([]);

        const showRoom = async () => {
            try {
                const res = await fetch('https://socchat-api.mya.ong/room');
                
                if(res.ok){
                    const data = await res.json();
                    console.log('data: ',data);
                    setRooms(data);
                }
                else{
                    console.log('error');
                }
            }
            catch(error){
                console.log(error);
            }
        };

        useEffect(() => {
            showRoom();
            const interval = setInterval(showRoom, 10000);

            return () => {
                clearInterval(interval);
            };
        }, []);

        return(
            <HomePage 
                {...props}
                rooms={rooms}
            />
        )
    };
}

export default WithFetch;
