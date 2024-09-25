import { USER_API_END_POINT } from '@/constants/constant';
import axios from 'axios';
import React, { useState } from 'react'

const Google = () => {
    const [dataText,setDataText] = useState({
        fullName:"",
        rollNo:"",
        email:"",
        classRoomNo:"",
        VivaQuestion:""
    })

    const handleChange=(e)=>{
        setDataText(e.target.value);
    }
    const handleSubmitData=async(e)=>{
        e.preventDefault();
        setDataText({...dataText,[e.target.name]:e.target.value});
        console.log(dataText)
    }

    const formData=new FormData();
    formData.append("fullname",dataText.fullName)
    formData.append("rollNo",dataText.rollNo)
    formData.append("email",dataText.email)
    formData.append("classRoomNo",dataText.classRoomNo)
    formData.append("VivaQuestion",dataText.VivaQuestion);
 try {
      const res=axios.post(`${USER_API_END_POINT}/google`,formData,{
        headers:{
            "Content-Type":"multipart/formdata"
        },
        withCredentials:true
      })
 } catch (error) {
    console.log("error",error);
    
 }

  return (
    <div>
      <form action='POST' onSubmit={handleSubmitData}>
   <input type='text' name='fullName' value={dataText.fullName} onChange={handleChange}/>
</form>
    </div>
  )
}

export default Google;
