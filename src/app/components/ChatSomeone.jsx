'use client'

import './ChatSomeone.css';
import { useRef } from 'react';

const ChatSomeone = ({type, name, message, reaction,handleContextMenu, contextMenu}) => {
    const targetRef = useRef(null);

    return(
        <div className={`chatsomeone`} style={{flexDirection: type=='me' ? 'row-reverse' : undefined }} >
            <div className={`profile ${contextMenu ? 'blur' : ''}`}></div>
            <div className="detail" style={{textAlign: type=='me' ? 'right' : undefined}}>
                <p className={`name ${contextMenu ? 'blur' : ''}`}>{name}</p>
                <p className={`message ${contextMenu ? contextMenu.reaction === targetRef.current ? 'no-blur' : 'blur' : ''}  ${type} `} onContextMenu={(e) => {handleContextMenu(e, e.target); targetRef.current = e.target.getBoundingClientRect().y; console.log(targetRef.current)}} ref={targetRef}>{message}</p>
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