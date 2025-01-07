'use client';

import './page.css';
import MainButton from '../components/MainButton';

const Home = () => {
    const inputEmail = () => {
        console.log('이메일을 입력해주세요.');
    }
    return(
        <div className="background">
          <div className="home">
            <div className="intro">
                <p style={{color:'#868686'}}>&apos;진짜 랜덤&apos;</p>
                <p>재밌는 <span style={{color:'#265BCC'}}>시간 제한</span></p>
                <p>단체 채팅</p>
                <div className="mainbtn">
                    <MainButton value={'이메일 입력하고 소식 받기'} color={'#3072ff'} onClick={inputEmail}/>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Home;