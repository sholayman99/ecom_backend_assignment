/*
* Author: Md. Sholayman
* Description: This file contains data table model for all profiles
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    userID:{type: mongoose.Schema.Types.ObjectId , required:true },
    cus_add:{type:String , required:true},
    cus_city:{type:String , required:true},
    cus_country:{type:String , required:true},
    cus_fax:{type:String , required:true},
    cus_name:{type:String , required:true},
    cus_phone:{type:String , required:true},
    cus_postcode:{type:String , required:true},
    cus_state:{type:String , required:true},
    ship_add:{type:String , required:true},
    ship_city:{type:String , required:true},
    ship_country:{type:String , required:true},
    ship_name:{type:String , required:true},
    ship_phone:{type:String , required:true},
    ship_postcode:{type:String , required:true},
    ship_state:{type:String , required:true}

},{ timestamps:true , versionKey:false });

const ProfileModel = mongoose.model("profiles" ,DataSchema );
module.exports = ProfileModel;