'use client'

import './page.css'
import Image from 'next/image'
import RoomItem from '../components/RoomItem'
import WithWebSocket from './withWebSocket'

const ChatRoomDto = [
    {
        channel: 1,
        name: 'Socchat합시다!',
        image: '',
        description: '우리모두 Socchat 합시다!',
        expireTime: '10',
        startTime: ''
    },
    {
        channel: 2,
        name: '윤하 포인트니모 곡 어떻게 생각해?',
        image: '',
        description: '좋다',
        expireTime: '20',
        startTime: ''
    },
    {
        channel: 3,
        name: 'ㅁㄴㅇㄻㄴㅇㄹ!',
        image: '',
        description: 'ㅁㄴㅇㄹ',
        expireTime: '24',
        startTime: ''
    }
]

const Home = ({rooms}) => {
    return(
        <div className="background">
            <div className="home">
                <div className="header">
                    <Image src='/images/socchat_logo.png' alt='logo' width={30} height={30} />
                    <div className="searchBox">
                        <input type="text" placeholder='제목 또는 태그를 검색하세요' />
                        <div className="search_icon"><Image src='/icons/material-symbols_search.png' alt='search_icon' width={23} height={23}/></div>
                    </div>
                    <div className="chat_tag">
                        <p>#기타</p>
                        <p>#노래방</p>
                        <p>#아무말</p>
                        <p>#공부</p>
                        <p>#개발</p>
                    </div>
                </div>
                <div className="banner"></div>
                <div className="best_room">
                    <h4>인기 채팅방</h4>
                    {
                        ChatRoomDto.map((item, index) => (
                            <RoomItem key={item.channel} num={index} name={item.name} description={item.description} expireTime={item.expireTime} />
                        ))
                    }
                    {
                        rooms.map((item) => {
                            console.log(item);
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WithWebSocket(Home);