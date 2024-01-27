const express = require('express')
const app = express()
const cors = require('cors')
const { default: mongoose } = require('mongoose')
import env from 'dotenv'
env.config()

app.use(express.json())     //to use json data in website

app.use(cors({              // to allow the front-end and backend port for exhange of data
    credentials:true,
    origin:'http://localhost:5173'
}))

app.get('/test' , (req ,res)=>{
    res.json('test ok')
    console.log("Done..")
})

mongoose.connect(process.env.MONGO_URI)

app.post('/register' , (req,res)=>{
    const {name , email , password} = req.body
    res.json({name , email , password})
})

app.listen(4000 )
console.clear()