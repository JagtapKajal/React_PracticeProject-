import React from 'react'
import { useParams } from 'react-router-dom'
const CourcesR = () => {
    // console.log(useParams())
      const arr = [
    { id: "J001", CorceName: "java", price: 50000, 
duration: "6 months" },
    { id: "R002", CorceName: "React", price: 50000, 
duration: "6 months" },
    { id: "P003", CorceName: "Python", price: 50000, 
duration: "6 months" },
    { id: "H004", CorceName: "HTML", price: 50000, 
duration: "6 months" },
  ];
    const {id} = useParams()

    const cource_detail = arr.filter((data) => data.id == id)
  return (
    <div>
      <h1>Cource id = {id}</h1>
      <h2>Cource Name = </h2>
    </div>
  )
}

export default CourcesR
