import React from "react";

function ConditonalStmt({ name, age, pancard, price }) {
  //COnditional statement using ternary operator  condition->() , if condition is true -> ? (), if con False -> :()

  // age > 18 ? console.log("you can vote") : console.log("you are not eligible")

  return (
    <div>
      {/* apply inline  css */}
      <h2 style={{ color: "red" }}>Conditional Statement</h2>
      <h2>Name = {name}</h2>
      <h3>
        {age > 18 ? <h2>You can vote</h2> : <h2>You are not Eligible</h2>}
      </h3>

      {/* && operator automatically analize condition is true or false */}

      <h3>{pancard && <p>You can open bank account</p>}</h3>
      <h3>{price == 150000 && <h3>You can Buy Mobile</h3>}</h3>
    </div>
  );
}

export default ConditonalStmt;
