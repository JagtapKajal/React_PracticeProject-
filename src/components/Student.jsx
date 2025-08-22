import React from 'react'
import './Student.css'
// Reusable component without props just pass the variable name(child component)
const Student = ({name,age,marks,gender}) => {
  return (
    <div className = "div">
      <h2> name = {name}</h2>
      <h2>age = {age}</h2>
      <h2>marks = {marks}</h2>
      <h2>gender = {gender}</h2>
    </div>
  )
}

export default Student
