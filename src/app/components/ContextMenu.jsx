import './ContextMenu.css'

const ContextMenu = () => {
    return(
        <>
        <table className='contextMenu'>
            <tbody>
                <tr><td className='context_items react_container' style={{display:'flex', justifyContent:'space-around'}}>
                    <div className="react_icon">👍</div>    
                    <div className="react_icon">➕</div>
                </td></tr>
                <tr><td className='context_items'>신고하기</td></tr>
                <tr><td className='context_items'>닫기</td></tr>
            </tbody>
        </table>
        </>
    )
}

export default ContextMenu;