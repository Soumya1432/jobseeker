import express from "express";
import { getAdminJob, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/auhentication.js";

const router= express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getAdminJob);
router.route("/get/:id").get( isAuthenticated , getJobById );

export default router;