import React from "react";
import { Link } from "react-router-dom";
const DynamicRouting = () => {
  const arr = [
    { id: "J001", CorceName: "java", price: 50000, duration: "6 months" },
    { id: "R002", CorceName: "React", price: 50000, duration: "6 months" },
    { id: "P003", CorceName: "Python", price: 50000, duration: "6 months" },
    { id: "H004", CorceName: "HTML", price: 50000, duration: "6 months" },
  ];
  return (
    <div>
      <ul>
        {arr.map((data) => (
          <div key={data.id}>
            <li>
                 <link to={`/cources/${data.id}`}>{data.CorceName}</link>{" "}
                 </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DynamicRouting;
