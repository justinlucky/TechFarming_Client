import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Index.css';

const Index = () => {
  return (
    <div>
      <div className="index-container">
        <h1>This website is under development you can check out for the progress. By visiting the Home button.</h1>
        <Link to='/home'>Home</Link>
      </div>
    </div>
  )
}

export default Index