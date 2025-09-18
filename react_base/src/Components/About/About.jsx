import React from 'react'
// import { Element } from 'react-scroll'
import './About.css'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="header">
        <h1>About</h1>
      </div>
      <div className="content">
        <div className="about-div">
            <h2>How to use the website</h2>
            <p>Simply upload your MRI scans by using the upload button above. The scans should be in correct format(jpg, png, jpeg) reffer to below examples for better understanding</p>
            <div className="example-image">
              <img src="https://i.ibb.co/TMBMk8xM/28-14.jpg" alt="example 1" />
              <img src="https://i.ibb.co/dsqPcWtm/26-19.jpg" alt="example 2" />
            </div>
        </div>
        <div className="about-div">
          <h2>How the predictions are made</h2>
          <p>The website uses a trained machine learning model to predict whether the patient has low,mild,high or extreme case</p>
        </div>

        <div className="about-div">
          <h2>Disclamer</h2>
          <p>The model can predict the correct case with 90% accuracy. For better understanding and results please visit a certified doctor. The owner/Team of the website do not take any responsibility for any type of physical, mental, financial, etc loss. </p>
        </div>
      </div>
    </div>
  )
}

export default About
