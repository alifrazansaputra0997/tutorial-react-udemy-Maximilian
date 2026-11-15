export default function TabButton(props){
    function handleClick(){
        console.log('CLICKED')
    }
    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    )
}