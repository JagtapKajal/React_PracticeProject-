import React from 'react'
import { useParams } from 'react-router-dom'

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

    const Course_Details = arr.filter((data) => data.id == id)
  return (
    <div>
      <h1>Course id = {id}</h1>
      <h2> </h2>
    </div>
  )
}

export default Course_Details
