/*
* Author: Md. Sholayman
* Description: This file contains data table model for all product categories
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    categoryName : {type:String , required:true},
    categoryImg :{type:String , required:true}

},{ timestamps:true , versionKey:false });

const CategoryModel = mongoose.model("categories" , DataSchema );
module.exports = CategoryModel;