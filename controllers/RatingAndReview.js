const Course=require("../models/Course");
const RatingAndReview=require("../models/RatingAndReview")
const mongoose=require("mongoose");
const User = require("../models/User");
exports.creatingRatingAndReview=async(req,res)=>{
    try{
        const userId=req.user.id;
        const userDetail=await User.findById(userId);
        const {rating,review,courseId}=req.body;
        //check if user is enrolled or not
        const courseDetail=await Course.findOne({_id:courseId,
            userEnrolled:
            {$elemMatch: {$eq:userDetail._id} },})
        
        if(!courseDetail){
            return res.status(404).json({
                succes:false,
                message:"Student is not enrolled"
            })
        }
        const alreadyReviewed=await RatingAndReview.findOne({
            user:userDetail._id,
            course:courseId,
        });
        if(alreadyReviewed){
            return res.status(400).json({
                succes:false,
                message:"Student is AlreadyRevied"
            }) 
        }
        const ratingReview=await RatingAndReview.create({
            rating,review,
            course:courseId,
            user:userDetail._id,
        })

        await Course.findByIdAndUpdate(
            {_id:courseId},
            {
                $push:{
                    RatingAndReview:ratingReview._id
                }
            },
            {new:true} 
        )
        return res.status(200).json({
            succes:true,
            message:"Rating and Review created",
            ratingReview
        })
        
    }
    catch(err){
        return res.status(500).json({
            succes:false,
            message:"Failed to create ratingreview"
        })
    }
}

//getAverageRating
exports.getAverageRating=async(req,res)=>{
    try {
       const {courseID}=req.body.courseId;
       const courseDetail=await Course.findById(courseID);
       
       //cal avg rating
       const result=await RatingAndReview.aggregate([
        {
            $match:{
                course:courseDetail._id,
            }
        },
        {
            $group:{
                _id:null,
                averageRating:{$avg:"$rating"}
            }
        }
       ])
       //return rating
       if(result.length>0){
        return res.status(200).json({
            succes:true,
            averageRating:result[0].averageRating,
        })
       }
       return res.status(404).json({
            succes:false,
            message:"Average rating is 0",
            averageRating:0,
        })
    } 
    catch(error){
        return res.status(500).json({
            succes:false,
            message:error.message
        })
    }
}

//getAllrating
exports.getAllRatingAndReview=async(req,res)=>{
    try{
        const getAll=await RatingAndReview.find({}).sort({rating:"desc"})
        .populate({
        path:"user",
        select:"firstName lastName email image",
        })
        .populate({
        path:"course",
        select:"courseName"
        }).exec();
        
        return res.status(200).json({
         succes:true,
         message:"All review fetch",
        })
    } catch (error) {
        return res.status(500).json({
            succes:false,
            message:"All review failed to fetch",
           })
    }

}