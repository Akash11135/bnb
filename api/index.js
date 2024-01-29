import express from 'express'
const app = express()
import cors from 'cors'
import mongoose from 'mongoose'
import User from './models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
import cookieParser from 'cookie-parser'
env.config()

app.use(cookieParser())  //to read cookie while authentication

app.use(express.json())     //to use json data in website
const bcryptSalt = bcrypt.genSaltSync(10)

app.use(cors({              // to allow the front-end and backend port for exhange of data
    credentials:true,
    origin:'http://localhost:5173'
}))

app.get('/test' , (req ,res)=>{
    res.json('test ok')
    console.log("Done..")
})


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.log("err : ",err)
    }
}

connectDB()

mongoose.connection.once('open',()=>{
    console.log(`connection established on url:${process.env.MONGO_URI}`)
})

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if any of the required fields are missing
        if (!name || !email || !password) {
            return res.status(422).json({ "message": "All fields are required" });
        }

        // Check if the email is already in use
        const duplicate = await User.findOne({ email });
        if (duplicate) {
            return res.status(422).json({ message: "Username/email already exists" });
        }

        // Create a new user
        const user = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });

        // Send a success response
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error in registration:", error);

        // Send an error response without breaking the connection
        return res.status(500).json({ "message": "Internal server error" });
    }
});

app.post('/login',async(req,res)=>{
    const{email , password} = req.body
    const user = await User.findOne({email})  //find email
    if(user){
        const passOk = bcrypt.compareSync(password , user.password)
        if(passOk){
            jwt.sign({id:user._id , email:user.email} , process.env.JWT_KEY , {} , (err , token)=>{
                if(err) throw err;
                return res.cookie('token',token).send(user)
            })
        }else{
            return res.status(422).send("invalid login credentials")
        }
    }else{
        return res.status(422).json({"message":"user not found" })
    }
})

app.get('/profile' , (req,res)=>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token , process.env.JWT_KEY , {} , (error , user)=>{
            if (error) throw error
            res.send(user)
        })
    }else{
        res.json(null)
    }
})

app.listen(4000)

console.clear()