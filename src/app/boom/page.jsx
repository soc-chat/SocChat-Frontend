'use client';

import MainButton from '../components/MainButton';
import { useRouter } from 'next/navigation';
import { Background } from '../chat/[id]/page.style';
import { Bold, ButtonContainer, Detail, GlobalStyle, View } from './page.style';

const Boom = () => {
    const router = useRouter()
    return(
        <>
            <GlobalStyle />
            <Background>
            <View>
                <Detail>
                    <div className="desc_text">
                        <Bold style={{marginBottom:0}}>채팅방이</Bold>
                        <Bold>터졌어요 💣</Bold>
                        <p style={{color:'#a8a8a8'}}>다음에 다시 만나요</p>
                    </div>
                    <ButtonContainer>
                        <MainButton color={'#4C4C4C'} value={'나가기'} onClick={()=>{router.push('/home')}}/>
                    </ButtonContainer>
                </Detail>
            </View>
            </Background>
        </>
    )
}

export default Boom;