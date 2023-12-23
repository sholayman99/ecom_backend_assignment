const mongoose = require("mongoose");


const DataSchema = mongoose.Schema({

    categoryName : {type:String , required:true},
    categoryImg :{type:String , required:true}

},{ timestamps:true , versionKey:false });

const CategoryModel = mongoose.model(DataSchema , "categories");
module.exports = CategoryModel;