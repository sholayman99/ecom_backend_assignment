/*
* Author: Md. Sholayman
* Description: This is the file that contains all the controllers for the carts.
* Date : 26 December 2023
* */

//importing cart list services
const {SaveCartListService,UpdateCartListService,RemoveCartListService,CartListService}=require("../services/CartServices");


//controller for creating and updating add to cart list
exports.SaveCartList = async(req,res) =>{
    let result = await SaveCartListService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for creating and updating add to cart list
exports.UpdateCartList = async(req,res) =>{
    let result = await UpdateCartListService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}



//controller for deleting cart list
exports.RemoveCartList = async(req,res) =>{
    let result = await RemoveCartListService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}

//controller for reading/finding cart list
exports.CartList = async(req,res) =>{
    let result = await CartListService(req);

    if(result['status'] === "success"){
        res.status(200).json(result);
    }else{
        res.status(400).json(result);
    }
}