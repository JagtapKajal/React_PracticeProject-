import React from "react";
import { Link } from "react-router-dom";

const DynamicRouting = () => {
  // Created array of course data
  const arr = [
    { id: "J001", CourseName: "Java", price: 50000, duration: "6 months" },
    { id: "R002", CourseName: "React", price: 50000, duration: "6 months" },
    { id: "P003", CourseName: "Python", price: 50000, duration: "6 months" },
    { id: "H004", CourseName: "HTML", price: 50000, duration: "6 months" },
  ];

  return (
    <div>
      <ul>
        {arr.map((data) => (
          <li key={data.id}>
            <Link to={`/courses/${data.id}`}>{data.CourseName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicRouting;
