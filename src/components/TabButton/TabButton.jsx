export default function TabButton({children, onClick, isSelected}){
    function handleClick(){
        console.log('CLICKED')
    }
    return (
        <li>
            <button className={isSelected && 'active' } onClick={onClick}>{children}</button>
        </li>
    )
}