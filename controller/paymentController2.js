const Razorpay =require('razorpay')
require('dotenv').config()
//const  Payment =require("../models/paymentModel.js");
const checkout=require('../controller/paymentController')
 
const paymentVerification=async (req,res)=>{
    
  res.redirect(
    `http://localhost:3000/paymentsuccess`
  );

  }




  module.exports=paymentVerification