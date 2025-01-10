'use client'

import './ChatSomeone.css';

const ChatSomeone = ({type, name, message, reaction,handleContextMenu}) => {
    

    
    return(
        <div className="chatsomeone" style={{flexDirection: type=='me' ? 'row-reverse' : undefined}} >
            <div className="profile"></div>
            <div className="detail" style={{textAlign: type=='me' ? 'right' : undefined}}>
                <p className="name">{name}</p>
                <p className={`message ${type} `} onContextMenu={(e) => handleContextMenu(e, name)}>{message}</p>
                {
                    reaction ? (
                        <p className='reaction' style={{marginLeft: type == 'me' ? 'auto' : undefined}}>👍 {reaction}</p>
                    ) : null
                }
            </div>
            
        </div>
    )
}

export default ChatSomeone;