const express = require('express')
const app = express()
var cors = require('cors')
const multer = require('multer')


var corsOptions = {
    origin: 'http://192.168.0.106:3000'
}
app.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        console.log(file)
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage: storage})





app.post('/', upload.single('file') ,(req,res)=>{
    console.log(req)
    console.log(res)
})


const port =8080
app.listen(port, ()=>{
    console.log(`listerning to port: ${port}`)
})