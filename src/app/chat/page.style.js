import styled from 'styled-components';
import createGlobalStyle from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    height: var(--vh, 100vh); /* --vh 값을 사용 */
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box; /* 모든 요소에 박스 모델 적용 */
  }
`;

export const TopMenu = styled.div`
                       display: flex;
height: 10vh;
padding: 0 20px;
align-items: center;
justify-content: space-between;

.left {
    display: flex;

    p {
        padding: 6px;
        font-size: 20px;
    }
}
`;

export const Background = styled.div`
                          background-color: rgb(130, 130, 130);
height: 100vh;
margin: 0;
overflow: hidden;
`;

export const Chat = styled.div`
                    user-select: none;
background-color: black;
width: 480px;
margin: auto;
height: 100vh;
padding: 1px;

@media (max-width: 440px) {
    width: 100vw;
}
`;

export const ChatContainer = styled.div`
                             overflow-y: auto;
height: 100vh;

&::-webkit-scrollbar {
    display: none;
}
`;

export const ChatInput = styled.div`
position: fixed;
bottom: 0;
height: 60px;
background-color: #3B3B3B;
width: 479px;
display: flex;
align-content: center;
padding: 10px 20px;
justify-content: space-between;

input {
    width: 80%;
    background-color: #3B3B3B;
    font-size: 18px;

    &:focus {
        outline: none;
    }
}

@media (max-width: 440px) {
    width: 100vw;
}
`;

export const SendImg = styled.div`
    align-content: center;
`;
