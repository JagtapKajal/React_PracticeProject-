import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Course_Details = () => {

      const arr = [
    { id: "J001", CourseName: "java", price: 50000, 
duration: "6 months" },
    { id: "R002", CourseName: "React", price: 50000, 
duration: "6 months" },
    { id: "P003", CourseName: "Python", price: 50000, 
duration: "6 months" },
    { id: "H004", CourseName: "HTML", price: 50000, 
duration: "6 months" },
  ];
    const {id} = useParams()
    const location = useLocation();

    const Course_Details = arr.filter((data) => data.id == id)
  return (
    <>
    <div>
      <h1>Course id = {id}</h1>
      <h3>Course Name = {Course_Details[0].CourseName}</h3>
      {location.pathname != "/courses/J001" && (
      <>
      <h3>Course price = {Course_Details[0].price}</h3>
      <h3>duration = {Course_Details[0].duration}</h3>
      </>)}
    </div>
    <button>
    <Link to={"/courses"} style={{testDecoration: "none", color: "black"}}>
    All Courses </Link>
    </button>
    </>
  )
}

export default Course_Details
