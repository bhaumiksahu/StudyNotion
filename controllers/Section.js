const Section=require("../models/Section");
const Course=require("../models/Course");

exports.createSection=async(req,res)=>{
try {
    //fetch the data
    const{sectionName,courseId}=req.body;
    //validation
    if(!sectionName||!courseId){
        return res.status(400).json({
            success:false,
            message:"All details are necessary"
        })
    }
    const section=await Section.create({
        sectionName,
    })
    //update the course add section
    const updateCourse=await Course.findByIdAndUpdate(
        courseId,
        {
            $push:{
                courseContent:section._id,
            }
        },
        {new:true},
    )
    return res.status(200).json({
        success:true,
        message:"Section Created Successful",
        updateCourse
    }) 
 
}
catch(error){
    return res.status(500).json({
        success:false,
        error:error.message, 
        message:"Section not Created",
    })   
    }
}
exports.updateSection=async(req,res)=>{
    try {
        const{sectionName,sectionId}=req.body;
        if(!sectionName||!sectionId){
            return res.status(400).json({
                success:false,
                message:"all fields are required",
            })
        }
        const update=await Section.findByIdAndUpdate(
        sectionId,{sectionName:sectionName},{new:true});
        return res.status(200).json({
            success:true,
            update,
            message:"Section Updated Successful",
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            error:message.error,
            message:"Failed to update section",
        })
    }
}
exports.deleteSection=async(req,res)=>{
    try {
       //assuming getting id in params
       const{sectionId}=req.params;  
    
       //do we need to delete from schema
       await Section.findByIdAndDelete(sectionId);

       return res.status(200).json({
        success:true,
        message:"Section deleted Successful",
    })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"failed to delete section",
        })
    }
}