/*
* Author: Md. Sholayman
* Description: This file contains data table model for all users
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    email :{type:String , required:true},
    otp :{type:String , required:true},

},{ timestamps:true , versionKey:false });

const UserModel = mongoose.model("users" , DataSchema );
module.exports = UserModel;