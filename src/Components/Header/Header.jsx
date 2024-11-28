import React from 'react'
import { Link } from 'react-router-dom'
import LogOut from '../LogOut/LogOut'

const Header = () => {
  return (
    <div>
        <header>
          <nav>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/about-us'>About</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/contact-us'>Contact</Link></li>
              <li><Link to='/community-forum'>Forum</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
          <LogOut/>
        </header>
    </div>
  )
}

export default Header