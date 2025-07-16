import { useState } from "react";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => setCount1(prev => prev + 1);
  const decrementCount1 = () => setCount1(prev => prev - 1);
  const addFiveCount1 = () => setCount1(prev => prev + 5);
  const resetCount1 = () => setCount1(0);

  const addByCount1 = () => setCount2(prev => prev + count1);
  const subtractByCount1 = () => setCount2(prev => prev - count1);
  const resetCount2 = () => setCount2(0);

  return (
    <div style={{ fontFamily: "Arial", padding: "1rem" }}>
      <h2>Counter One</h2>
      <p>Current Count: {count1}</p>
      <button onClick={incrementCount1}>Increment</button>{" "}
      <button onClick={decrementCount1}>Decrement</button>{" "}
      <button onClick={addFiveCount1}>Add 5</button>{" "}
      <button onClick={resetCount1}>Reset</button>

      <h2 style={{ marginTop: "2rem" }}>Counter Two</h2>
      <p>Current Count: {count2}</p>
      <button onClick={addByCount1}>Add {count1}</button>{" "}
      <button onClick={subtractByCount1}>Subtract {count1}</button>{" "}
      <button onClick={resetCount2}>Reset</button>
    </div>
  );
}