import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(404).json({
        message: "Job id is required",
        success: false
      });
    }
    //check if the user has already  or not for this job id
    const exisitingApplication = await Application.findOne({
      job: jobId,
      applicant: userId
    });
    if (exisitingApplication) {
      return res.status(400).json({
        message: "You have already applied for this jobs",
        success: false
      });
    }
    //check if the job exist or not
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false
      });
    }
    //create a new application for that user
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId
    });
    job.application.push(newApplication._id);
    await job.save();
    return res.status(200).json({
      message: "Job applied successfully",
      success: true
    });
  } catch (error) {
    console.log("Error", error);
  }
};

//where we can find who are applied on that particular jobs by using get method
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } }
        }
      });
    if (!application) {
      return res.status(404).json({
        message: "No Applications",
        success: false
      });
    }
    return res.status(200).json({
      application,
      message: "get all list",
      success: true
    });
  } catch (error) {
    console.log("Error", error);
  }
};

//admin checks that how much user applied on that jobs
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant"
      }
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not find",
        success: false
      });
    }

    return res.status(200).json({
      job,
      message: "Success",
      success: true
    });
  } catch (error) {
    console.log("error", error);
  }
};

//updated job like pending accepted or rejected
export const updateStatus=async(req,res)=>{
    try {
        const { status }= req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(400).json({
                message:"Status is required",
                success:false
            })
        }
// //find application by applicant id who are applied on jobs
const application = await Application.findOne({_id:applicationId})
if(!application){
    return res.status(404).json({
        message:"Application not found",
        success:false
    });
}

//update the status for that 
application.status=status.toLowerCase();
await application.save();

return res.status(200).json({
    message:"Status updated successfully",
    success:true
})

    } catch (error) {
        console.log("Error",error);
    }
}






































































// import { Application } from "../models/application.model.js";
// import { Job } from "../models/job.model.js";

// export const applyJob = async (req, res) => {
//     try {
//         const userId = req.id;
//         const jobId = req.params.id;
//         if (!jobId) {
//             return res.status(400).json({
//                 message: "Job id is required.",
//                 success: false
//             })
//         };
//         // check if the user has already applied for the job
//         const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

//         if (existingApplication) {
//             return res.status(400).json({
//                 message: "You have already applied for this jobs",
//                 success: false
//             });
//         }

//         // check if the jobs exists
//         const job = await Job.findById(jobId);
//         if (!job) {
//             return res.status(404).json({
//                 message: "Job not found",
//                 success: false
//             })
//         }
//         // create a new application
//         const newApplication = await Application.create({
//             job:jobId,
//             applicant:userId,
//         });

//         job.applications.push(newApplication._id);
//         await job.save();
//         return res.status(201).json({
//             message:"Job applied successfully.",
//             success:true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };
// export const getAppliedJobs = async (req,res) => {
//     try {
//         const userId = req.id;
//         const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
//             path:'job',
//             options:{sort:{createdAt:-1}},
//             populate:{
//                 path:'company',
//                 options:{sort:{createdAt:-1}},
//             }
//         });
//         if(!application){
//             return res.status(404).json({
//                 message:"No Applications",
//                 success:false
//             })
//         };
//         return res.status(200).json({
//             application,
//             success:true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// // admin checks that how much user applied
// export const getApplicants = async (req,res) => {
//     try {
//         const jobId = req.params.id;
//         const job = await Job.findById(jobId).populate({
//             path:'applications',
//             options:{sort:{createdAt:-1}},
//             populate:{
//                 path:'applicant'
//             }
//         });
//         if(!job){
//             return res.status(404).json({
//                 message:'Job not found.',
//                 success:false
//             })
//         };
//         return res.status(200).json({
//             job, 
//             succees:true
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const updateStatus = async (req,res) => {
//     try {
//         const {status} = req.body;
//         const applicationId = req.params.id;
//         if(!status){
//             return res.status(400).json({
//                 message:'status is required',
//                 success:false
//             })
//         };

//         // find the application by applicantion id
//         const application = await Application.findOne({_id:applicationId});
//         if(!application){
//             return res.status(404).json({
//                 message:"Application not found.",
//                 success:false
//             })
//         };

//         // update the status
//         application.status = status.toLowerCase();
//         await application.save();

//         return res.status(200).json({
//             message:"Status updated successfully.",
//             success:true
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }