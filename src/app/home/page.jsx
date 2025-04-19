'use client'

import Image from 'next/image'
import RoomItem from '../components/RoomItem'
import WithFetch from './WithFetch'
import { useState } from 'react'
import { Background } from '../chat/[id]/page.style'
import { GlobalStyle, View } from '../boom/page.style'
import { Banner, Header, RoomList, SearchBox, SearchInput, SearchTag } from './page.styled'

const Home = ({rooms}) => {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');
    return(
        <>
            <GlobalStyle />
            <Background>
                <View>
                    <Header>
                        <Image src='/images/socchat_logo.png' alt='logo' width={30} height={30} style={{ width: 30, height: "auto" }} />
                        <SearchBox>
                            <SearchInput type="text" placeholder='제목 또는 태그를 검색하세요' onChange={(e)=>setInput(e.target.value)} />
                            <div style={{cursor:'pointer'}} onClick={()=>setSearch(input)}><Image src='/icons/material-symbols_search.png' alt='search_icon' width={23} height={23}/></div>
                        </SearchBox>
                        <SearchTag>
                            <p onClick={()=>setSearch('')}>#기타</p>
                            <p onClick={()=>setSearch('노래방')}>#노래방</p>
                            <p onClick={()=>setSearch('아무말')}>#아무말</p>
                            <p onClick={()=>setSearch('공부')}>#공부</p>
                            <p onClick={()=>setSearch('개발')}>#개발</p>
                        </SearchTag>
                    </Header>
                    <Banner></Banner>
                    <RoomList>
                        <h4>전체 채팅방</h4>
                        {
                            rooms
                            .filter((item)=>item.name.include(search))
                            .map((item, index) => (
                                <RoomItem key={index} num={index} channelId={item.id} name={item.name} image={item.image} description={item.description} startTime={item.startTime} expireTime={item.expireTime}/>
                            ))
                        }
                    </RoomList>
                </View>
            </Background>
        </>
    )
}

export default WithFetch(Home);