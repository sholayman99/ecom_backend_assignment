/*
* Author: Md. Sholayman
* Description: This is the file that contains all the controllers for the users.
* Date : 25 December 2023
* */

//importing all the service function for these controllers
const {UserOTPService,VerifyLoginService,SaveProfileService,
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
                expires : new Date(Date.now() + 24 * 60 * 60 * 1000 ),
                httpOnly:false
            }
            res.cookie("token" , result['token'] , cookieOption  );
           return res.status(200).json(result);
        }else{
            return res.status(200).json(result) ;
        }

    }else{
        res.status(400).json(result);
    }

}

//controller for the user logout
exports.UserLogout = async(req, res) =>{

    let cookieOption = {
        expires : new Date(Date.now() - 24 * 60 * 60 * 1000 ),
        httpOnly:false
    }
    res.cookie("token" , " " , cookieOption  );
    res.status(200).json({ status:"sucess" , message:"Logout successful" });

}

//controller for creating a user profile
exports.CreateProfile = async(req, res) =>{

    let result = await SaveProfileService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }

}

//controller for Updating a user profile
exports.UpdateProfile = async(req, res) =>{

    let result = await SaveProfileService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }


}

//controller for Reading a user profile
exports.ReadProfile = async(req, res) =>{

    let result = await ReadProfileService(req);

    if(result['status'] === "success"){
        return res.status(200).json(result);
    }else{
        return res.status(400).json(result);
    }

}