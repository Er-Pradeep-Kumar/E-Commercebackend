const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

//for payment
const paymentRoute=require('./routes/paymentRoute.js')
//payment settings

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)
//payment
app.use("/api",paymentRoute)
app.use(express.urlencoded({extended:true}))
app.get("/api/getkey",(req,res)=>
res.status(200).json({key:process.env.RAZORPAY_API_KEY}))
//payment

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
