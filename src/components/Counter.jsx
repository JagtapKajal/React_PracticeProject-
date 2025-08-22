import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const [incCount, setIncCount] = useState(0);

  const [decCount, setDecCount] = useState(0);

  const increaseBy1 = () => {
    //counter++;
    setCounter(counter + 1);
    setIncCount((prev) => prev + 1);
    console.log("counter = ", counter);
  };
  const decreaseBy1 = () => {
    //counter--;
    setCounter(counter - 1);
    setDecCount((prev) => prev + 1);
    console.log("counter = ", counter);
  };

  return (
    
    <div className="container">
      <div className="card">
          <h3>Count It Up !</h3>
        <h2>{counter}</h2>
        <div className="buttons">
          <button onClick={increaseBy1}>Increment</button>
          <button onClick={decreaseBy1}>Decrement</button>
        </div>
        <div className="clicks">
          <p>Clicks on Increment: {incCount}</p>
          <p>Clicks on Decrement: {decCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
