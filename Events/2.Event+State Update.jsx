// 2. Event + State Update
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <p>User clicking {count} times</p>
        </div>
    );
}

// after Click, increment() function call hoitese
// setCount() state update korche
// Component re-render hocche