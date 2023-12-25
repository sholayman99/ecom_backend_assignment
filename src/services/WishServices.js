/*
* Author: Md. Sholayman
* Description: This is the file that contains all the services for the controllers of the wish.
* Basically in this file We will complete all the query for wish controllers.
* Date : 25 December 2023
* */

//importing necessary models for wish list
const WishModel = require("../models/WishModel");

//query for creating and updating wish list
const SaveWishListService = async(req) =>{
   try {
       let user_id = req.headers['user_id'];
       let reqBody = req.body ;
       console.log(reqBody)
       reqBody.userID = user_id ;
       let data = await WishModel.updateOne(reqBody, {$set:reqBody} , {upsert:true});
       return { status:"success" , message:"Saved Data Successfully" , data:data };
   }
   catch (e) {
       return { status:"failed" , message:"Unsuccessful Attempt" , error:e }.toString();
   }
}


//query for deleting wish list
const RemoveWishListService = async(req) =>{
    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body ;
        console.log(reqBody)
        reqBody.userID = user_id ;
        let data = await WishModel.deleteOne(reqBody);
        return { status:"success" , message:"Deleted Data Successfully" , data:data };
    }
    catch (e) {
        return { status:"failed" , message:"Unsuccessful Attempt" , error:e }.toString();
    }
}


//query for reading/finding wish list
const WishListService = async(req) =>{
    try {
        let user_id = req.headers['user_id'];
        let data = await WishModel.find({userID:user_id});
        return { status:"success" , data:data };
    }
    catch (e) {
        return { status:"failed" , error:e }.toString();
    }
}

//exporting all the wish list services
module.exports = {SaveWishListService,RemoveWishListService,WishListService};