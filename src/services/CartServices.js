/*
* Author: Md. Sholayman
* Description: This is the file that contains all the services for the controllers of the carts.
* Basically in this file We will complete all the query for cart controllers.
* Date : 26 December 2023
* */

//importing necessary modules
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;

//importing necessary models for Cart list
const CartModel = require("../models/CartModel");


//query for creating add to cart list
const SaveCartListService = async(req) =>{
   try{
       let user_id = req.headers['user_id'];
       let reqBody = req.body ;
       reqBody.userID = user_id ;
       let data = await CartModel.create(reqBody);
       return {status:"success" , message:"Data Saved Successfully" , data:data};
   }
   catch (e) {
       return {status:"failed" , message:"Unsuccessful attempt" , error:e}.toString();
   }
}

//query for updating add to cart list
const UpdateCartListService = async(req) =>{
  try{
    let user_id = req.headers['user_id'];
    let cartID = req.params['cartID']
    let reqBody = req.body ;
    let data = await CartModel.updateOne({_id:cartID , userID:user_id},{$set:reqBody});
    return {status:"success" , message:"Data Updated Successfully" , data:data};
  }
  catch (e) {
    return {status:"failed" , message:"Unsuccessful attempt" , error:e}.toString();
  }
}


//query for deleting cart list
const RemoveCartListService = async(req) =>{
    try{
        let user_id = req.headers['user_id'];
        let reqBody = req.body ;
        reqBody.userID = user_id ;
        let data = await CartModel.deleteOne(reqBody);
        return {status:"success" , message:"Data Removed Successfully" , data:data};
    }
    catch (e) {
        return {status:"failed" , message:"Unsuccessful attempt" , error:e}.toString();
    }
}

//query for reading/finding cart list
const CartListService = async(req) =>{
    try {
        let user_id = new ObjectId(req.headers.user_id);
        let matchStage = {$match:{userID:user_id}};
        let joinWithProductStage = { $lookup : {
            from:"products" , localField:"productID" , foreignField:"_id" , as:"product"
            }};
        let unwindProductStage = {$unwind:"$product"};
        let joinWithBrandStage = { $lookup : {
                from:"brands" , localField:"product.brandID" , foreignField:"_id" , as:"brand"
            }};
        let unwindBrandStage = {$unwind:"$brand"};
        let joinWithCategoryStage = { $lookup : {
                from:"categories" , localField:"product.categoryID" , foreignField:"_id" , as:"category"
            }};
        let unwindCategoryStage = {$unwind:"$category"};
        let projectStage = {$project:{ "_id":0 ,"categoryID":0,"brandID":0,
                "product._id":0 , "product.brandID":0 ,"product.categoryID":0 ,"brand._id":0,"category._id":0
            }}

        let data = await CartModel.aggregate([matchStage,joinWithProductStage,
            unwindProductStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,
            projectStage
        ]);
        return {status:"success" ,  data:data};
    }
    catch (e) {
        return {status:"failed" , error:e}.toString();
    }
}

//exporting all the cart services
module.exports = {SaveCartListService,UpdateCartListService,RemoveCartListService,CartListService};