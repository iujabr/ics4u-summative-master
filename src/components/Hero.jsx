import React from 'react'
import { Link } from 'react-router-dom';
// import App from "<div styleName={}></div>"
// <source />/App.css

{/* <head> */}
  // <link rel="stylesheet" href="App.css"></link>
{/* </head> */}

const Hero = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 style={{fontSize: '50px'}}>MovieDig.org</h1>
        <p>Digging through the classics on site since 2024.</p>
      </div>
      <Link to="/login">
        <button type="button">Already have an account? Sign In!</button>
      </Link>
      <Link to="/register">
        <button type="button">New? Sign Up!</button>
      </Link>
    </div>
  )
}

export default Hero