import React from "react";
import { Link } from "react-router-dom";
const DynamicRouting = () => {
  //Created array of cource data
  const arr = [
    { id: "J001", CourceName: "java", price: 50000, duration: "6 months" },
    { id: "R002", CourceName: "React", price: 50000, duration: "6 months" },
    { id: "P003", CourceName: "Python", price: 50000, duration: "6 months" },
    { id: "H004", CorceName: "HTML", price: 50000, duration: "6 months" },
  ];
  return (
    <div>
      <ul>
        {arr.map((data) => 
          <div key={data.id}>
            <li>
              <link to={`/cources/${data.id}`}>{data.CourceName}</link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default DynamicRouting;
