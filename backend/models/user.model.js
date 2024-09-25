import mongoose, { Mongoose } from "mongoose";
const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phoneNumber:{
        type:Number,
        unique:true,
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        require:true
    },
    profile:{
        bio:{
            type:String
        },
        skills:[{type:String}],
        resume:{type:String}, //url to resume file
        resumeOriginalName:{type:String},
        company:{
            type: mongoose.Schema.Types.ObjectId, ref:'Company'
        },
        profilePhoto:{
            type:String,
            default:""
        }
    }
},{timestamps:true});

export const User= mongoose.model('user',userSchema);
