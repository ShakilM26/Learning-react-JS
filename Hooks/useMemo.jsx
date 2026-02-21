import React, { useState, useMemo } from 'react';

export default function Memo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const expensiveCalculation = (num) => {
    console.log("ক্যালকুলেশন হচ্ছে...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  // useMemo ব্যবহার করায় এটি শুধু 'count' বদলালেই অংক করবে
  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // Dependency Array: এখানে শুধু count এর ওপর নজর রাখছে

  return (
    <div>
      <h1>Count: {calculation}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <hr />
      
      {/* এখন Add Todo ক্লিক করলে expensiveCalculation আর রান হবে না! 
          কারণ রিঅ্যাক্ট জানে count তো বদলায়নি, তাই আগের উত্তরটাই বসিয়ে দাও। */}
      <button onClick={() => setTodos([...todos, "New Todo"])}>Add Todo</button>
      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}