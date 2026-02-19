import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You've Clicked {count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>Decrease</button>
        </div>
    );
}

export default Counter;