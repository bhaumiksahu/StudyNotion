const express=require("express");
const app=express();

const userRoutes=require("./routes/User");
const profileRoutes=require("./routes/Profile");
const paymentRoutes=require("./routes/Payments")
const courseRoutes=require("./routes/Course");

const DbConnect=require("./config/database");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const {cloudinaryConnect}=require("./config/cloudinary")
const fileUpload=require("express-fileupload");
require("dotenv").config();

const PORT=process.env.PORT || 4000;
//dbconnect
DbConnect();
//middleware
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)
//cloudinaryconnect
cloudinaryConnect();
//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/profile",profileRoutes);
//activate server
app.listen(PORT,(req,res)=>{
    console.log("App is started: "+PORT)
})