import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='main-div'>
        <div className="container">
            <div className="container2">
                <h1>Check your result <span>NOW!</span></h1>
                <p>please upload your brain MRI scan below in jpeg, png or jpg format</p>
                <form method='post' action='post'>
                  <label htmlFor="upload-image">Upload</label>
                  <input type="file" accept='image/jpeg, image/png, image/jpg' id='upload-image'/>
                  <button type='submit' name='upload'>Upload</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Hero