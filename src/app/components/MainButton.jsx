'use client';

import './MainButton.css'

const MainButton = ({value, onClick, color, textColor}) => {
    return(
        <button className='mainBtn' style={{backgroundColor:color, color:textColor ? textColor : 'white'}} onClick={onClick}>{value}</button>
    )
}

export default MainButton;