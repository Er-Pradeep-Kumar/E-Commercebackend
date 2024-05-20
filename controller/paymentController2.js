const Razorpay =require('razorpay')
require('dotenv').config()
//const  Payment =require("../models/paymentModel.js");
const checkout=require('../controller/paymentController')
const frontend=process.env.FRONTEND_URL
 
const paymentVerification=async (req,res)=>{
    
  res.redirect(
    `${frontend}/paymentsuccess`
  );

  }




  module.exports=paymentVerification