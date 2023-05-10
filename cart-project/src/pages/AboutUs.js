import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <div className='AboutUsPage d-flex flex-column'>
    <h1>About Us</h1>
    <div>
    <button className='btn btn-primary my-5' onClick= {() =>navigate(-1)}>Go back</button>
    </div>
    </div>
  )
}

export default AboutUs