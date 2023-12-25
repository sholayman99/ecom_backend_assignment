/*
* Author: Md. Sholayman
* Description: This file contains data table model for all carts
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    productID : {type: mongoose.Schema.Types.ObjectId , required:true},
    userID:{type: mongoose.Schema.Types.ObjectId , required:true},
    color:{type:String , required:true},
    price:{type:String , required:true},
    qty:{type:String , required:true},
    size:{type:String , required:true}

},{ timestamps:true , versionKey:false });

const CartModel = mongoose.model( "carts" , DataSchema );
module.exports = CartModel;