
/*
* Author: Md. Sholayman
* Description: This file contains data table model for all product sliders
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    title :{type:String , required:true},
    des :{type:String , required:true},
    price :{type:String , required:true},
    img :{type:String , required:true},
    productID :{type: mongoose.Schema.Types.ObjectId , required:true}

},{ timestamps:true , versionKey:false });

const ProductSliderModel = mongoose.model("productsliders" , DataSchema );
module.exports = ProductSliderModel;