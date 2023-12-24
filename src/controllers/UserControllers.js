/*
* Author: Md. Sholayman
* Description: This is the file that contains all the controllers for the users.
* Date : 25 December 2023
* */

//importing all the service function for these controllers
const {UserOTPService,VerifyLoginService,UserLogoutService,CreateProfileService,UpdateProfileService,
    ReadProfileService } = require("../services/UserServices")

//controller for the user otp code
exports.UserOTP = async(req, res) =>{

    let result = await UserOTPService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//controller for the user login verification
exports.VerifyLogin = async(req, res) =>{

    let result = await VerifyLoginService(req);

    if(result['status'] === "success"){
        if(result['message'] === "Valid Token" ){
            let cookieOption = {
                expires : new Date(Date.now() +  2 * 24 * 60 * 60 ),
                httpOnly:false
            }
            res.cookie("token" , result['token'] , cookieOption  );
            res.status(200).json(result);
        }else{
            res.status(200).json(result) ;
        }

    }else{
        res.status(400).json(result);
    }

}

//controller for the user logout
exports.UserLogout = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//controller for creating a user profile
exports.CreateProfile = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//controller for Updating a user profile
exports.UpdateProfile = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//controller for Reading a user profile
exports.ReadProfile = async(req, res) =>{

    let result = await BrandListService();

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}