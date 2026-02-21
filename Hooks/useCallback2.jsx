import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

export default Parent;

// ekhane button click korle count change hoy and 
// Parent function re-render hoy and 
// handleClick notun kore abar toiri hoy. 

// useCallback use korar karone ekhane Parent re-render hoitese
// but handleClick notun kore abar toiri hocchena

// function props hisebe child a pathale tokhon useCallback dorkar hoy
// ar Child jodi React.memo use kore tokhon