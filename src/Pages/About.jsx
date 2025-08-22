import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const goToHome = ()=> {
    navigate('/');
  }
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>
      Hello About
      <button onClick={goToHome}>Go to Home</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default About
