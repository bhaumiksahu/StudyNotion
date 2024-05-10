const jwt=require("jsonwebtoken");
require("dotenv").config();
const User=require("../models/User");

//auth
exports.auth=async(req,res,next)=>{
    try {
        const token=req.cookies.token||req.body.token||req.header("Authorisation").replace("Bearer ","");
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token Missing",
            })
        }
        try {
            const decode=await jwt.verify(token,process.env.JWT_SECRET);
            req.user=decode;
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"Token is invalid",
            })
        }
        next();
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
        })
    }
}

//isStudent
exports.isStudent=async(req,res,next)=>{
    try {
        if(req.user.accountType!=="Student"){
            return res.status(400).json({
                success:false,
                message:"this is protected for Student",
            })
        }
        next();
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified",
        })
    }
}

//isAdmin
exports.isAdmin=async(req,res,next)=>{
    try {
        if(req.user.accountType!=="Admin"){
            return res.status(400).json({
                success:false,
                message:"this is protected for Admin",
            })
        }
        next();
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified",
        })
    }
}

//isInstructor
exports.isInstructor=async(req,res,next)=>{
    try {
        if(req.user.accountType!=="Instructor"){
            return res.status(400).json({
                success:false,
                message:"this is protected for Instructor",
            })
        }
        next();
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified",
        })
    }
}
