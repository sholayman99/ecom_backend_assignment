/*
* Author: Md. Sholayman
* Description: This file contains data table model for all wishes
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    productID :{type: mongoose.Schema.Types.ObjectId , required:true},
    userID :{type: mongoose.Schema.Types.ObjectId , required:true}

},{ timestamps:true , versionKey:false });

const WishModel = mongoose.model("wishes" , DataSchema );
module.exports = WishModel;