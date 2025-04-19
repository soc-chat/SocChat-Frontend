import styled from "styled-components";

export const Header = styled.div`
    padding: 25px;

    @media (max-width:440px) {
        width: 100vw;
    }
`

export const SearchBox = styled.div`
    display: flex;
    width: 100%;
    background-color: #3B3B3B;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    padding-left: 13px;
    padding-right: 13px;
    margin-top: 20px;
    border-radius: 10px;
`

export const SearchInput = styled.input`
    background-color: #3B3B3B;
    color: white;
    outline: none;
    width: 85%;

    &::placeholder{
        color: #7E7E7E;
    }
`

export const SearchTag = styled.div`
    display: flex;
    color: #979797;
    width: 100%;
    justify-content: space-around;
    margin-top: 10px;

    p {
        cursor: pointer;
    }
`

export const Banner = styled.div`
    width: 100%;
    background-color: white;
    height: 75px;
`

export const RoomList = styled.div`
    padding: 25px;

    h4 {
        font-size: 18px;
        color: #A8A8A8;
    }
`