import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
 
  const scro = () =>{
    const anchor = document.querySelector('#about')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const scro2 = () =>{
    const anchor = document.querySelector('#contact')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }


  
  const [menu,setMenu] = useState("home");

  return (
    <div className = 'navbar'>
      
        <div className = "nav-logo">
            <p>Alzheimer</p>
        </div>
        <ul className= "nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={scro}>About</li>
            <li onClick={scro2}>Contact Us</li>
           
        </ul>

        {/* <div className="nav-login-cart"> 
          <Link to= '/login'><button>Login</button></Link>
        
        </div> */}

    </div>
  )
}

export default Navbar
