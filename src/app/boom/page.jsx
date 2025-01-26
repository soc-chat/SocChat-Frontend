'use client';

import './page.css';
import MainButton from '../components/MainButton';
import { useRouter } from 'next/navigation';

const Boom = () => {
    const router = useRouter()
    return(
        <div className="background">
        <div className="waiting">
            <div className="desc">
                <div className="desc_text">
                    <p className='desc_bold' style={{marginBottom:0}}>채팅방이</p>
                    <p className='desc_bold'>터졌어요 💣</p>
                    <p style={{color:'#a8a8a8'}}>다음에 다시 만나요</p>
                </div>
                <div className="mainbtn">
                    <MainButton color={'#3072FF'} value={'소개보기'} onClick={()=>{router.push('/intro')}}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Boom;