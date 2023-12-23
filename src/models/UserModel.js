const mongoose = require("mongoose");


const DataSchema = mongoose.Schema({

    email :{type:String , required:true},
    otp :{type:String , required:true},

},{ timestamps:true , versionKey:false });

const UserModel = mongoose.model(DataSchema , "users");
module.exports = UserModel;