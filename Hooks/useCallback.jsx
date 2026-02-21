import React, {useState} from "react";

const Button = React.memo(({onClick, children}) => {
    console.log(`${children} Rendering button!`)
    return <button onClick={onClick}>{children}</button>
});

export default function Appss() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const increment = () => {
        setCount(prev => prev+1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>

            <Button onClick={() => setOtherState(!otherState)}>State Change (Toggle)</Button>
        </div>
    );
}