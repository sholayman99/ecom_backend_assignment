/*
* Author: Md. Sholayman
* Description: This file contains data table model for all invoice products
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    userID:{type: mongoose.Schema.Types.ObjectId , required:true},
    productID : {type: mongoose.Schema.Types.ObjectId , required:true},
    invoiceID : {type: mongoose.Schema.Types.ObjectId , required:true},
    qty:{type:String , required:true},
    price:{type:String , required:true},
    color:{type:String , required:true},
    size:{type:String , required:true}

},{ timestamps:true , versionKey:false });

const InvoiceProductModel = mongoose.model("invoiceproducts",DataSchema );
module.exports = InvoiceProductModel;