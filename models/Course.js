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
    courseContent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
        required:true,
    },
    ratingReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
        required:true,
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
        required:true,
    }],
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
        required:true,
    }
})

exports.model=mongoose.model("Course",CourseSchema);