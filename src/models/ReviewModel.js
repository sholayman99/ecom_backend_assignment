/*
* Author: Md. Sholayman
* Description: This file contains data table model for all reviews
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    productID :{type: mongoose.Schema.Types.ObjectId , required:true},
    userID :{type: mongoose.Schema.Types.ObjectId , required:true},
    des :{type:String , required:true},
    rating :{type:String , required:true}

},{ timestamps:true , versionKey:false });

const ReviewModel = mongoose.model("reviews" , DataSchema );
module.exports = ReviewModel;