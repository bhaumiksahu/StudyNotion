const Course=require("../models/Course");
const Tag=require("../models/Tag");
const User=require("../models/User");
const {uploadImage}=require("../utils/imageUploader");

//createCourse
exports.createCourse=async(req,res)=>{
    try {
        const {price,tag,courseName,courseDescription,whatYouWillLearn}=req.body;

        const{thumbnail}=req.files.thumbnailImage;

    if(!courseName || !courseDescription||!whatYouWillLearn || !thumbnail || !price || !tag){
        return res.status(400).json({
            success:false,
            message:"All fields are required",
        })
    }
    const userId=req.user.id;
    const InstructorDetail=await User.findById({userId});

    if(!InstructorDetail){
        return res.status(404).json({
            success:false,
            message:"Instructor not found",
        })
    }
    const tagDetails=await Tag.findById({tag});

    if(!tagDetails){
        return res.status(404).json({
            success:false,
            message:"TagDetail Not Found",
        })
    }
    const thumbnailImage=await uploadImage(thumbnail,process.env.FOLDER_NAME);

    //******************check here userID and InstructorDetail id are same or not and also tag @@@@@@@@@@@@@@
    const newCourse=await Course.create({
        courseName,courseDescription,
        instructor:InstructorDetail._id,
        whatYouWillLearn,price,
        tag:tagDetails._id,
        thumbnail:thumbnailImage.secure_url
    })
    //add the new course to user schema of instructor
    await User.findByIdAndUpdate({_id:InstructorDetail._id},
        {
            $push:{
                courses:newCourse._id,
            }
        },
        {new:true}
    )
    //update tag schema
    await Tag.findByIdAndUpdate
    (   {_id:tagDetails._id},
        {
            $push:{
                course:newCourse._id,
            }
        },
        {new:true}
    )
    return res.status(200).json({
        success:true,
        message:"Course Created Successful"
    })
    } 
    catch(error){   
        
    }
}

//getallCourse
exports.getallCourse=async(req,res)=>{
    try {
        const allCourses=await Course.find({},
            {   courseName:true,
                price:true,
                thumbnail:true,
                instructor:true,
                ratingAndReview:true,
                studentEnrolled:true,
            }
        ).populate("instructor").exec();
        return res.status(200).json({
            success:true,
            message:"Data Found of all courses",
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:"cannot fetch course data",
        })
    }
}