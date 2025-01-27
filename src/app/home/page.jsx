'use client'

import './page.css'
import Image from 'next/image'
import RoomItem from '../components/RoomItem'
import WithFetch from './WithFetch'

const Home = ({rooms}) => {
    return(
        <div className="background">
            <div className="home">
                <div className="header">
                    <Image src='/images/socchat_logo.png' alt='logo' width={30} height={30} style={{ width: 30, height: "auto" }} />
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
                        rooms.map((item, index) => (
                            <RoomItem key={index} num={index} name={item.name} image={item.image} description={item.description} startTime={item.startTime} expireTime={item.expireTime}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WithFetch(Home);