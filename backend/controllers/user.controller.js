import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({
        message: "User already exist with this email",
        success: false
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role
    });

    return res.status(201).json({
        message:"Account created successfully",
        success:true,
    });
  } catch (error) {
    console.log("error",error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email ",
        success: false
      });
    }
    //for password checking with hash
    const ispasswordMatch = await bcrypt.compare(password, user.password);
    if (!ispasswordMatch) {
      return res.status(400).json({
        message: "Incorrect  password",
        success: false
      });
    }
//check role is correct or not 
  if(role !== user.role){
     return res.status(400).json({
        message:"Account does not exist with current role",
        success:false
     })
  }
  const tokenData={
    userId:user._id,
  }
  const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{ expiresIn:'1d'});
//     user= {
//     id:user._id,
//     fullName:user.fullName,
//     email:user.email,
//     phoneNumber:user.phoneNumber,
//     role:user.role,
//     profile:user.profile
// }
console.log(token);
  return res.status(200).cookie("token",token,{ maxAge: 1*24*60*60*1000,httpOnly:true,sameSite:'strict' }).json({
    message:`Welcome back ${user.fullName}`,
    user,
    success:true
  })

    } catch (error) {
        console.log("error",error);
    }
};

export const logout=async (req,res)=>{
    try {
        return res.status(200).cookie("token"," ",{maxAge:0}).json({
            message:"Logout successfully",
            success:true
        })
    } catch (error) {
        console.log("error",error);

    }
};

export const updateProfile = async(req,res)=>{
    try {
        const { fullName,email,phoneNumber,bio,skills } = req.body;
        const file = req.file;
        // if (!fullName || !email || !phoneNumber || !bio || !skills) {
        //     return res.status(400).json({
        //       message: "Something is missing",
        //       success: false
        //     })
        // }
//cloudinary comes here
let skillsArray;
       if(skills){

          skillsArray = skills.split(",");
       }
        const userId= req.id;  //middleware authentication
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false,
            })
        }
        if(fullName) user.fullName = fullName;
        if(email) user.email= email;
        if(phoneNumber) user.phoneNumber= phoneNumber;
        if(bio) user.profile.bio= bio;
        if(skills) user.profile.skills= skillsArray;
        
    //updating data
      user.fullName = fullName;
      user.email= email;
      user.phoneNumber= phoneNumber,
      user.profile.bio=bio,
      user.profile.skills=skillsArray;

        await user.save();
        user= {
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }
        
    return res.status(200).json({
        message:"profile updated successfully",
        user,
        success:true,
    })
// resume comes later here

    } catch (error) {
        console.log(error);
    }
}

