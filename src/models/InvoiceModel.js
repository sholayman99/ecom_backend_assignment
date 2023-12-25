/*
* Author: Md. Sholayman
* Description: This file contains data table model for all invoices
* Date : 23 December 2023
* */

//importing database
const mongoose = require("mongoose");

//creating schema(database model)
const DataSchema = mongoose.Schema({

    userID : {type: mongoose.Schema.Types.ObjectId , required:true},
    payable :{type:String , required:true},
    cus_details :{type:String , required:true},
    ship_details :{type:String , required:true},
    tran_id :{type:String , required:true},
    val_id :{type:String , required:true},
    payment_status :{type:String , required:true},
    delivery_status :{type:String , required:true},
    total :{type:String , required:true},
    vat :{type:String , required:true},

},{ timestamps:true , versionKey:false });

const InvoiceModel = mongoose.model("invoices",DataSchema  );
module.exports = InvoiceModel;