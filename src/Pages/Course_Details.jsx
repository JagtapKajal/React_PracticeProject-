import React from 'react'
import { useParams } from 'react-router-dom'

const Course_Details = () => {

      const arr = [
    { id: "J001", CourceName: "java", price: 50000, 
duration: "6 months" },
    { id: "R002", CourceName: "React", price: 50000, 
duration: "6 months" },
    { id: "P003", CourceName: "Python", price: 50000, 
duration: "6 months" },
    { id: "H004", CourceName: "HTML", price: 50000, 
duration: "6 months" },
  ];
    const {id} = useParams()

    const Course_Details = arr.filter((data) => data.id == id)
  return (
    <div>
      <h1>Cource id = {id}</h1>
      <h2>Cource Name = </h2>
    </div>
  )
}

export default Course_Details
