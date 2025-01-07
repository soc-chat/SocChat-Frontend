import Image from "next/image";

const Timer = () => {
    //라이브러리 버전 문제로 아직 타이머는 구현되지 않았습니다.
    return(
        <div className="timer">
            <Image src="/images/timer(test).png" alt="위치 확인위한 임시" width={42} height={42}/>
        </div>
    )
}

export default Timer;