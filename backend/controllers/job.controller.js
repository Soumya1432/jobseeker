import { Job } from "../models/job.model.js";

// who post the job by id or recruiter
export const postJob=async(req,res)=>{
  try {
      const { title,description,requirements,salary,location,jobType,experience,position,companyId}= req.body;
      const userId=req.id;
      if(!title || !description ||!requirements || !salary ||!location ||!jobType ||!experience ||!position ||!companyId){
        return res.status(401).json({
            message:"Something is missing",
            success:"false"
        })
      }

      const job = await Job.create({
        title,
        description,
        requirements: requirements.split(","),  // Now this will work with the updated schema
        salary: Number(salary),
        location,
        jobType,
        experience,
        position,
        company: companyId,
        created_by: userId
      });
      

return res.status(201).json({
    message:"New Job created successfully",
    job,
    success:true
})
  } catch (error) {
    console.log("error",error);
  }
}

export const getAllJobs=async(req,res)=>{
    try {
        const keyword=req.query.keyword || "";
        const query ={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},
            ]
        };
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1})
        if(!jobs){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log("Error",error);
    }
}

//student who create a job or get jobby id
export const getJobById= async (req,res)=>{
    try {
        const jobId=req.params.id;
        const job= await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        }
        return res.status(200).json({
            job,
            message:"",
            success:true
        })

    } catch (error) {
        console.log("Error",error);
    }
}


//admin section who create the job
export const getAdminJob= async(req,res)=>{
  try {
    const adminId=req.id;
    const jobFind= await Job.find({ created_by:adminId })
    if(!jobFind){
        return res.status(404).json({
            message:"Jobs not found",
            success:false
        })
    }

    return res.status(200).json({
        jobFind,
        success:true
    })
  } catch (error) {
    
  }
}