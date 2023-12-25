/*
* Author: Md. Sholayman
* Description: This file contains data table model for all features
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    name : {type:String , required:true},
    description :{type:String , required:true},
    img :{type:String , required:true}


},{ timestamps:true , versionKey:false });

const FeaturesModel = mongoose.model("features", DataSchema  );
module.exports = FeaturesModel;