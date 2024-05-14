const mongoose=require("mongoose");

const CourseSchema= new mongoose.Schema({

    courseName:{
        type:String,
        required:true,
    },
    courseDescription:{
        type:String,
        required:true,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    whatYouWillLearn:{
        type:String,
        required:true
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    }],
    ratingReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
    }],
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true,
    },
    userEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
    },
    tag:{
        type:[String],
        required:true,
    },
    createdAt: { type: Date, default: Date.now },

})

module.exports=mongoose.model("Course",CourseSchema);