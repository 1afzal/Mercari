import mongoose from "mongoose";
import { Schema } from "mongoose";

const User = new Schema({
    email: {type:String, unique:true, required:true},
    password: {required: true , type: String},
    name: {required: true,type:String}
})

const userModel = mongoose.model("user",User);

export {userModel}