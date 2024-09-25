import React, { useState } from 'react'
import imageone from "../../assets/images/Telecommuting-pana.png"
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { USER_API_END_POINT } from '@/constants/constant';
import { toast } from 'sonner';
import { useSelector,useDispatch } from 'react-redux';
import store from '@/redux/store';
import { setLoading } from '@/redux/authslice';
import { Loader2 } from 'lucide-react';

const Signup = () => {
    const [takeInput,setTakeInput]= useState(
        {
            fullName:"",
            email:"",
            phoneNumber:"",
            password:"",
            file:"",
            role:""
        });
    const navigate= useNavigate();
    const { loading } =  useSelector(store=>store.auth);
    const dispatch= useDispatch();

    const changeEventHandler=(e)=>{
        setTakeInput({...takeInput,[e.target.name]:e.target.value});
    }
   const changeFileHandler=(e)=>{
    setTakeInput({...takeInput,file:e.target.files?.[0]});
   }

   const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("fullName",takeInput.fullName);
    formData.append("email",takeInput.email);
    formData.append("phoneNumber",takeInput.phoneNumber);
    formData.append("password",takeInput.password);
    formData.append("role",takeInput.role);
    if(takeInput.file){
        formData.append("file",takeInput.file);
    }
    try {
      dispatch(setLoading(true));
        const res=await axios.post(`${USER_API_END_POINT}/register`,formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            },
            withCredentials:true
        })
  if(res.data.success){
    navigate("/login")
    toast.success(res.data.message);
  }
    } catch (error) {
        console.log("Error",error);
        toast.error(error.response.data.message);
    }
    finally{
      dispatch(setLoading(false));
    }
   }
  return   (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center border rounded-md shadow-md overflow-hidden">


        <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center bg-gray-50">
          <img src={imageone} alt="Login Illustration" className="object-contain h-full" />
        </div>


        <div className="md:w-1/2 w-full p-8">
          <form  onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-semibold">Hey User, Sign Up Now,</h1>
            

            
            <div className="flex flex-col space-y-1">
              <Label>Full Name</Label>
              <Input
                type="text"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
                value={takeInput.fullName}
                name="fullName"
                onChange={changeEventHandler}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>Email</Label>
              <Input
                type="email"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email address"
                value={takeInput.email}
                name="email"
                onChange={changeEventHandler}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>Phone Number</Label>
              <Input
                type="tel"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                value={takeInput.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={takeInput.password}
                name="password"
                onChange={changeEventHandler}
              />
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                    checked={takeInput.role ==='student'}
                    onChange={changeEventHandler}
                  />
                  <Label>Student/Employee</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={takeInput.role ==='recruiter'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Recruiter</Label>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Label>Profile</Label>
                <Input
                  type="file"
                  accept="image/*"
                  className="cursor-pointer"
                  onChange={changeFileHandler}
                />
              </div>
            </div>

            {/* <Button
              type="submit"
              className=" w-full  py-2 bg-green-700 text-white rounded-md hover:bg-blue-600 transition"
            >
              Sign Up
            </Button> */}


            {
   loading ? <Button className="w-full"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait </Button>
   :
            <Button
              type="submit"
              className="w-full py-2 text-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Sign up
            </Button>

}



            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 hover:underline">
                Sign in
              </Link>
            </p>

          </form>
        </div>


      </div>
    </div>
  );
}

export default Signup;
