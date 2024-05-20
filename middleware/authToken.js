const jwt = require('jsonwebtoken')

async function authToken(req,res,next){
    try{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNiMDAwZmE1YTU4NTdlODFmZTQ4MGYiLCJlbWFpbCI6InByYWRlZXBrdW1hci5lci5vbmVAZ21haWwuY29tIiwiaWF0IjoxNzE2MTk5MjQ3LCJleHAiOjE3NDQ5OTkyNDd9.13tCY9T_EeZ8gDdjUIm1VQgpdPGibIfbnP3V1Y6k5eI"

        console.log("token",token)
        if(!token){
            return res.status(200).json({
                message : "Please Login...!",
                error : true,
                success : false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            console.log(err)
            console.log("decoded",decoded)
            
            if(err){
                console.log("error auth", err)
            }

            req.userId = decoded?._id

            next()
        });


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            data : [],
            error : true,
            success : false
        })
    }
}


module.exports = authToken