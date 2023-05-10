import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='not-found-page'>
         <h1 className="text-dander">404</h1>
      <h3>Page not found</h3>
      <p> This page you are looking for doesn't exist or an other occurred</p>
      <button className='btn btn-primary my-5' onClick= {() =>navigate("/")}>Back to homepage</button>
    </div>
  )
}

export default NotFound