const express = require('express');
var cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data') ;


const app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))

const upload = multer({storage: multer.memoryStorage()})





app.post('/',upload.single('uploadImage'),async (req,res)=>{
    try {
        if(!req.file){
            return res.status(400).send('No file Uploaded');
        }

        const formData = new FormData();
        formData.append('file', req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype
        });

        const apiResponse = await axios.post(
            'http://localhost:8000', 
            formData, 
            { 
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                },
            }
        );
        res.json(apiResponse.data);
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({message: "Internal server error"})
    }
})


const port =8080
app.listen(port, ()=>{
    console.log(`listerning to port: ${port}`)
})