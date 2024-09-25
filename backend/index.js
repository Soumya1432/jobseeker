import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connnectDB from "./db/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true
};

app.use(cors(corsOption));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
// app.get("/",(req,res)=>{
//    return res.status(200).json({
//     message:"I am working on project",
//     success: true
//    })
// })

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  connnectDB();
  console.log(`server started on ${PORT}`);
});

//db pass  1tY2rAuRpVAzGlYK
//username biswassoumya17
// mongodb+srv://biswassoumya17:1tY2rAuRpVAzGlYK@cluster10.ctnqu.mongodb.net
