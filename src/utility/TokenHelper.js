/*
* Author: Md. Sholayman
* Description: This is the file that contains two helper function for jwt token
* Date : 25 December 2023
* */

//importing jsonwebtoken
const jwt = require("jsonwebtoken");

//function for encode json web token
exports.encodeToken = (email,user_id) =>{

  let key = "123-abc-xyz-sh" ;
  let payload = {email:email , user_id:user_id} ;
  let expire = {expiresIn: "48hrs"} ;
  return jwt.sign(payload,key,expire);

}

//function for decode json web token
exports.decodeToken = (token) =>{

    try{
        let key = "123-abc-xyz-sh" ;
        return jwt.verify(token,key);
    }
    catch (e) {
         return null
    }

}