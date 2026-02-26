// 1. Basic onClick Event

export default function BasicEvent() {
    function handleClick() {
        alert("Button Clicked")
    }

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

// onClick - react Event
// {handleClick} -> function reference
// when click function will execute