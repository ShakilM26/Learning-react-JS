import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    // count = state value
    // setCount = number changing function

    return (
        <div>
            <h1><strong>Counter App</strong></h1>

            {/* taking values from state and displaying */}
            <h3>Shakil Clicked: {count} times</h3>
            <br></br>

            {/* count = (present value) + 1 */}
            <button onClick={() => setCount(count+1)}>Increase</button>
            
            <button onClick={() => setCount(0)}>Reset</button>
            

            {/* first check condition, if it's tru then  
            "setCount(count - 1)" will run */}
            <button onClick={() => count > 0 && setCount(count - 1)}>Decrease</button>
        </div>
    );
}

export default Counter;