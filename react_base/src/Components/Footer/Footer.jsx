import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id="contact" className="contact"> 
    <div className='footer'>
        <div className="main-up">
            <div className="logo">
                <h1>Alzheimer</h1>
            </div>
            <hr />
            <ul className='footer-list'>
                <li><a href="#Home">Alzheimer@gmail.com</a></li>
                <li><p>Contact: +91 232323232</p></li>
                <li><p>Address: juhi nagar, Malad,</p></li>
            </ul>
        </div>
        <hr />
        <div className="main-down">
            
            <p>All copyright reserved @2023 by Alzheimer.co</p>
        </div>
    </div>
    </div>
  )
}

export default Footer