// 4. Event Object (e)

export default function Event(){
    
    function handleClick(e){
        console.log(e); // Synthetic Event
        console.log(e.target); // kon element theke event asche
    }

    return(
        <button onClick={handleClick}>Inspect Event</button>
    )
}

// React event handler automatically event object dey