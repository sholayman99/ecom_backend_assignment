/*
* Author: Md. Sholayman
* Description: This is the file that contains all the controllers for the wishes.
* Date : 25 December 2023
* */

//importing all the wish list services
const {SaveWishListService,RemoveWishListService,WishListService} = require("../services/WishServices");


//controller for creating and updating wish list
exports.SaveWishList = async(req,res) =>{
    let result = await SaveWishListService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}


//controller for deleting wish list
exports.RemoveWishList = async(req,res) =>{
    let result = await RemoveWishListService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}


//controller for reading/finding wish list
exports.WishList = async(req,res) =>{
    let result = await WishListService(req);
    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}