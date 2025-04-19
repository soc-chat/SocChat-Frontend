import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @media (max-width:440px) {
        html, body {
            height: 100%;
        }

        body {
            height: calc(var(--vh, 1vh) * 100); /* --vh 값을 사용 */
        }
    }
`

export const View = styled.div`
    background-color: black;
    height: calc(var(--vh, 1vh) * 100);
    width: 440px;
    user-select: none;
    overflow: hidden;
    margin: auto;
    user-select: none;
`

export const Detail = styled.div`
    margin: auto;
    width: 440px;
    margin-top: 10vh;
    overflow: hidden;
    text-align: center;

    @media (max-width:440px) {
        width: 90vw;
        margin-top: 17vh;
        margin-left: 20px;
    }
`

export const Bold = styled.p`
    font-size: 30px;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;
`

export const ButtonContainer = styled.div`
    margin: auto;
    width: 390px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 8vh;

    @media (max-width:440px) {
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        bottom: 5vh;
        margin: auto;
    }
`