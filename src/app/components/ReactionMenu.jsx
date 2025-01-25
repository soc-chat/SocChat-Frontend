import './ReactionMenu.css'
import Image from 'next/image';

const ReactionMenu = () => {
    return(
        <div className="ReactionMenu">
            <div className="react_icon">💖</div>    
            <div className="react_icon">😁</div>    
            <div className="react_icon">😢</div>    
            <div className="react_icon">😡</div>    
            <div className="react_icon">👍</div>    
            <div className="react_icon"><Image src="/icons/ic_baseline-plus-grey.png" alt="+" width={30} height={30} /></div>
        </div>
    )
}

export default ReactionMenu;