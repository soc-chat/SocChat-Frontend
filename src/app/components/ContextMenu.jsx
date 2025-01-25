import './ContextMenu.css'

const ContextMenu = () => {
    return(
        <>
        <table className='contextMenu'>
            <tbody>
                <tr><td className='context_items'>Reply</td></tr>
                <tr><td className='context_items'>Edit</td></tr>
                <tr><td className='context_items'>Forward</td></tr>
                <tr><td className='context_items'>Copy</td></tr>
                <tr style={{borderBottom: 'none'}}><td className='context_items unsend'>Unsend</td></tr>
            </tbody>
        </table>
        </>
    )
}

export default ContextMenu;