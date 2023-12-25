/*
* Author: Md. Sholayman
* Description: This file contains data table model for all product brands
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    brandName : {type:String , required:true},
    brandImg :{type:String , required:true}

},{ timestamps:true , versionKey:false });

const BrandModel = mongoose.model("brands" , DataSchema  );
module.exports = BrandModel;