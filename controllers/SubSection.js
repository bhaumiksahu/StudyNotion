const SubSection=require("../models/SubSection");
const Section=require("../models/Section");
const { uploadImage } = require("../utils/imageUploader");
require("dotenv").config();
exports.createSubSection=async(req,res)=>{
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
exports.updateSubSection=async(req,res)=>{
    try {
        const { sectionId, subSectionId, title, description } = req.body
        const subSection = await SubSection.findById(subSectionId)
    
        if (!subSection) {
          return res.status(404).json({
            success: false,
            message: "SubSection not found",
          })
        }
    
        if (title !== undefined) {
          subSection.title = title
        }
    
        if (description !== undefined) {
          subSection.description = description
        }
        if (req.files && req.files.video !== undefined) {
          const video = req.files.video
          const uploadDetails = await uploadImageToCloudinary(
            video,
            process.env.FOLDER_NAME
          )
          subSection.videoUrl = uploadDetails.secure_url
          subSection.timeDuration = `${uploadDetails.duration}`
        }
    
        await subSection.save()
    
        // find updated section and return it
        const updatedSection = await Section.findById(sectionId).populate(
          "subSection"
        )
    
        console.log("updated section", updatedSection)
    
        return res.json({
          success: true,
          message: "Section updated successfully",
          data: updatedSection,
        })
    }     
    catch(error){
        res.status(500).json({
            success:false,
            message:"failed to Subsection update",
    })
    }
}
exports.deleteSubSection=async(req,res)=>{
    try {
        //assuming getting id in params
        const{subSectionId, sectionId}=req.body;  
        await Section.findByIdAndUpdate(
            { _id: sectionId },
            {
              $pull: {
                subSection: subSectionId,
              },
            },
            {new:true}
          )
        //do we need to delete from schema
        await SubSection.findByIdAndDelete(subSectionId);
        const updatedSection = await Section.findById(sectionId).populate(
            "subSection"
          )
      
        return res.status(200).json({
         success:true,
         message:"Subsection deleted Successful",
         data: updatedSection,
     })
     }
     catch(error){
         return res.status(500).json({
            success:false,
            message:"failed to delete Subsection",
         })
     }
}