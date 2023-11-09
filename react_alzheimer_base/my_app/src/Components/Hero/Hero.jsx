import React, { useState } from 'react'
import './Hero.css'
import axios from 'axios'



const Hero = () => {
  const [image, setImage] = useState('')
  
  const handelChange = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const handleAPI = () => {
    //API call
    // const url = ''
    const formData = new FormData()
    formData.append('file', image )
    // axios.post(url, formData).then((res)=>{
    //   console.log(res)
    // })

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000',
      data: formData,
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'multipart/form-data'
      },
    }).then(response => {
        console.log(response);
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
                {/* <label htmlFor="upload-image">Upload</label> */}
                <input type="file" accept='image/jpeg, image/png, image/jpg' onChange={handelChange}/>
                <button type='submit' name='upload' onClick={handleAPI}>Upload</button>
                
            </div>
        </div>
    </div>
  )
}

export default Hero