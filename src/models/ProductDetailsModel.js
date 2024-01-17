/*
* Author: Md. Sholayman
* Description: This file contains data table model for all product details
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    img1 : {type:String , required:true},
    img2 :{type:String , required:true},
    img3 :{type:String , required:true},
    img4 :{type:String , required:true},
    des :{type:String , required:true},
    color :{type:String , required:true},
    size :{type:String , required:true},
    productID :{type: mongoose.Schema.Types.ObjectId , required:true}

},{ timestamps:true , versionKey:false });

const ProductDetailsModel = mongoose.model("productdetails" , DataSchema );
module.exports = ProductDetailsModel;