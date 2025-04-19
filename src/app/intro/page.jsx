'use client';

import MainButton from '../components/MainButton';
import { Background } from '../chat/[id]/page.style';
import { ButtonContainer, GlobalStyle, View } from '../boom/page.style';
import { Introduce } from './page.styled';

const Intro = () => {
    const inputEmail = () => {
        console.log('이메일을 입력해주세요.');
    }
    return(
        <>
            <GlobalStyle />
            <Background>
            <View style={{padding: '1px'}}>
                <Introduce>
                    <p style={{color:'#868686'}}>&apos;진짜 랜덤&apos;</p>
                    <p>재밌는 <span style={{color:'#265BCC'}}>시간 제한</span></p>
                    <p>단체 채팅</p>
                </Introduce>
                <ButtonContainer style={{display:'flex', justifyContent:'center'}}>
                    <MainButton value={'이메일 입력하고 소식 받기'} color={'#3072ff'} onClick={inputEmail}/>
                </ButtonContainer>
            </View>
            </Background>
        </>
    )
}

export default Intro;