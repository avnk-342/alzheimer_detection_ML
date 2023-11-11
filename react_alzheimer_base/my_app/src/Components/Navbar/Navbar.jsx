import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="" alt="" />
            <h1>Alzheimer</h1>
        </div>
        <ul className='navbar-list'>
            <li><Link to='/' style={{textDecoration:'none', color:'black' }}>Home</Link></li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className="login-button">
            <Link to='/login' style={{textDecoration:'none'}}><button>Login/Sign-Up</button></Link> 
        </div>
    </div>
  )
}

export default Navbar