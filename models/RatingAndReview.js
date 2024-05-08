const mongoose=require("mongoose");

const RatingAndReviewSchema= new mongoose.Schema({
     user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
     }],
     rating:{
        type:Number,
        required:true,
     },
     Review:{
        type:String,
        required:true
     }
});

module.exports=mongoose.model("RatingAndReview",RatingAndReviewSchema);