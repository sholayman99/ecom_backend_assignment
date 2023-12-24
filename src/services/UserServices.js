/*
* Author: Md. Sholayman
* Description: This is the file that contains all the services for the controllers of the User.
* Basically in this file We will complete all the query for user controllers.
* Date : 25 December 2023
* */

//importing all the necessary models
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");

//importing helper function for sending an email to client
const emailSend = require("../utility/EmailHelper");
const {encodeToken} = require("../utility/TokenHelper");


//Query for the user otp code
const UserOTPService = async(req) =>{

   try{
      let email = req.params['email'] ;
      let code = Math.round(Math.floor(100000 + Math.random() * 900000));
      let emailSub = "Email Verification Code" ;
      let emailText = `Your Otp Verification Code Is : ${code}`;
      await emailSend(email,emailSub,emailText);
      await UserModel.updateOne({email:email} , {$set:{otp:code}} , {upsert:true});
      return {status:"success" , message: "6 Digit Otp Has Been Sent" };
   }catch (e) {
       return {status:"fail" , error:e }.toString();
   }

}

//Query for the user login verification
const VerifyLoginService = async(req) =>{

    try{
        let email = req.params['email'];
        let otp = req.params['otp'];
        let total = await UserModel.findOne({email:email , otp:otp}).count("total");

        if(total === 1){
            let user_id = await UserModel.find({email:email , otp:otp}).select("_id");
            let token = encodeToken(email , user_id[0]['_id']).toString();
            await UserModel.updateOne({email:email} , { $set:{otp:0} });
            return {status:"success" , message:"Valid Token", token : token  };
        }
        else{
            return {status:"fail" , message : "No User Found" };
        }
    }catch (e) {
        return {status:"fail" , error:e }.toString();
    }

}

//Query for the user logout
const UserLogoutService = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//Query for creating a user profile
const CreateProfileService = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//Query for Updating a user profile
const UpdateProfileService = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//Query  for Reading a user profile
const ReadProfileService = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

module.exports ={
    UserOTPService,VerifyLoginService,UserLogoutService,CreateProfileService,UpdateProfileService,ReadProfileService
}