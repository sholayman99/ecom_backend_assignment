const mongoose = require("mongoose");


const DataSchema = mongoose.Schema({

    brandName : {type:String , required:true},
    brandImg :{type:String , required:true}

},{ timestamps:true , versionKey:false });

const BrandModel = mongoose.model(DataSchema , "brands");
module.exports = BrandModel;