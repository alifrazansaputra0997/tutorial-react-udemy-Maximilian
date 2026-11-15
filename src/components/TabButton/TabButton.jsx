export default function TabButton({children, onClick}){
    function handleClick(){
        console.log('CLICKED')
    }
    return (
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    )
}