const SubSection=require("../models/SubSection");
const Section=require("../models/Section");
const { uploadImage } = require("../utils/imageUploader");
require("dotenv").config();
exports.createSubsection=async(req,res)=>{
    try {
        const{sectionId,title,timeDuration,description}=req.body;
        const video=req.files.videoFile;

        if(!sectionId||!title||!timeDuration||!description){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }

        const uploadVideo=await uploadImage(video,process.env.FOLDER_NAME);

        const Create=await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadVideo.secure_url,
        })

        const updateSection=await Section.findByIdAndUpdate(sectionId,{
            $push:{
                subSection:Create._id,
            }
        },{new:true}).populate("subSection").exec();

        res.status(200).json({
            success:true,
            message:"Subsection created successful",
            updateSection
        })
    } 
    catch(error){
        res.status(500).json({ 
            success:false,
            message:"Failed to create subsection",
        })
    }
}
exports.updateSubsection=async(req,res)=>{
    try{
        const{subSectionId,title,description,timeDuration}=req.body;
        const video=req.files.videoFile;

        if(!subSectionId||!title||!timeDuration||!description){
        return res.status(400).json({
            success:false,
            message:"all fields are required"
        })}
        const upload=await uploadImage(video,process.env.FOLDER_NAME);

        updateSub=await SubSection.findByIdAndUpdate(
        subSectionId,
        {
            title:title,
            description:description,
            timeDuration:timeDuration,
            videoUrl:upload.secure_url,
        },
        {new:true})

        res.status(200).json({
            success:true,
            message:"Subsection updated successful",
            updateSection
    })
    } 
    catch(error){
        res.status(500).json({
            success:false,
            message:"failed to Subsection update",
            updateSection
    })
    }
}
exports.deletSubsection=async(req,res)=>{
    try {
        //assuming getting id in params
        const{subSectionId}=req.params;  
     
        //do we need to delete from schema
        await SubSection.findByIdAndDelete(subSectionId);
 
        return res.status(200).json({
         success:true,
         message:"Subsection deleted Successful",
     })
     }
     catch(error){
         return res.status(500).json({
            success:false,
            message:"failed to delete Subsection",
         })
     }
}