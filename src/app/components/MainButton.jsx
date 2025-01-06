'use client';

import './MainButton.css'

const MainButton = ({value, onClick, color}) => {
    return(
        <button className='mainBtn' style={{backgroundColor:color}} onClick={onClick}>{value}</button>
    )
}

export default MainButton;