import React from "react";

const Event = () => {
  const handleClick = () => {
    alert("you click the button");
  };

  const addition = (a) => {
    alert(a + 10);
  };
  return (
    <div>
      <h2>Learning Events</h2>
      <button onClick={handleClick}>Click me</button>
      
      <button onClick={() => addition(100)}>Click for Addition</button>
    </div>
  );
};

export default Event;
