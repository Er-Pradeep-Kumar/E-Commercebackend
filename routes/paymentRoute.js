const express=require('express')
const paymentroute=express.Router();
const checkout =require('../controller/paymentController.js')
const paymentVerification=require('../controller/paymentController2.js')
paymentroute.route('/checkout').post(checkout)
paymentroute.route('/paymentverification').post(paymentVerification)

module.exports=paymentroute
