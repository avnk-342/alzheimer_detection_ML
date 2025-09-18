import React, { useState } from 'react'
import './Hero.css'
import axios from 'axios'



const Hero = () => {
  const [image, setImage] = useState('')
  const [ans] = useState('');
  const [imgName] = useState('');
  
  function display(str) {
    document.getElementById('results-span').style.visibility='visible';
    document.getElementById('results-span').innerHTML = "Result: " + str;
  }

  function displayName(str) {
    document.getElementById('image-span').style.visibility='visible';
    document.getElementById('image-span').innerHTML = str;
  }

  const handelChange = (e) => {
    setImage(e.target.files[0])
    displayName(e.target.files[0].name)
  }

  const handleAPI = () => {
    //API call
    const formData = new FormData()
    formData.append('file', image )

    axios({
      method: 'post',
      // url: 'http://localhost:8080',
      url: process.env.REACT_APP_EXPRESS_SERVER, //vercel required path
      data: formData,
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'multipart/form-data'
      },
    }).then(response => {
        const ans=response.data["Msg"];
        display(ans);
        return ans;

    }).catch(error => {
      console.error(error);
    });
    
  }
  

  return (
    <div className='main-div'>
        <div className="container">
            <div className="container2">
                <h1>Check your result <span>NOW!</span></h1>
                <p>please upload your brain MRI scan below in jpeg, png or jpg format</p>
                
                <div className='input-div'>
                  <label htmlFor="upload-image">Browse Images</label>
                  <input type="file" accept='image/jpeg, image/png, image/jpg' onChange={handelChange} id='upload-image' name='uploadImage'/>
                  <span id='image-span' style={{visibility :'hidden'}}>ans {imgName}</span>
                </div>
                <button type='submit' name='upload' onClick={handleAPI}>Upload</button>
                <span id='results-span' style={{visibility :'hidden'}}>ans {ans}</span>
            </div>
        </div>
    </div>
  )
}

export default Hero