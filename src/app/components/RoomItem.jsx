'use client';

import './RoomItem.css';

const RoomItem = ({num, name, expireTime}) => {
    const expire = Number(expireTime);  

    return(
        <div className="roomItem">
            <p className='num'>{num+1}</p>
            <div className="room_detail">
                <p style={{color:expire<=10 ? '#FF3030' : '#3072FF', fontSize: '12px'}}>{expire<=10 ? `💣${expire}분 남았어요` : `⌛ ${expire}분 남았어요`}</p>
                <p className="room_name">{name}</p>
            </div>
        </div>
    )
}

export default RoomItem;