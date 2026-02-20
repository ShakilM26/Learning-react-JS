import React, { useState, useEffect } from 'react'; 

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `👋 Waves Counting: ${count}`

        const timer = setTimeout(() => {
            setCount(count+1)
        }, 2000);

        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div>
            <p><h2>PSL sent you </h2> {count} 👋 waves</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default Counter;