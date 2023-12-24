/*
* Author: Md. Sholayman
* Description: This is the file that contains a middleware function that verifies if a user is valid or not.
* Date : 25 December 2023
* */

const {decodeToken} = require("../utility/TokenHelper");

//middleware function for token verification
module.exports = (req, res, next) =>{

        let token = req.headers['token'];
        if(!token){
        token = req.cookies['token'] ;
       }

        let decoded = decodeToken(token);

        if(decoded===null){
            return res.status(401).json({status:"Unauthorized" , message:"Invalid User"})
        }else{
            let email = decoded.email;
            let user_id = decoded.user_id ;
            req.headers.email = email ;
            req.headers.user_id = user_id ;
            next()
        }

}