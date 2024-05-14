const Section=require("../models/Section");
const Course=require("../models/Course");
const SubSection=require("../models/SubSection")
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
exports.deleteSection = async (req, res) => {
    try {
      const { sectionId, courseId } = req.body
      await Course.findByIdAndUpdate(courseId, {
        $pull: {
          courseContent: sectionId,
        },
      })
      const section = await Section.findById(sectionId)
      console.log(sectionId, courseId)
      if (!section) {
        return res.status(404).json({
          success: false,
          message: "Section not found",
        })
      }
      // Delete the associated subsections
      await SubSection.deleteMany({ _id: { $in: section.subSection } });
  
      await Section.findByIdAndDelete(sectionId)
  
      // find the updated course and return it
      const course = await Course.findById(courseId)
        .populate({
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        })
        .exec()
  
      res.status(200).json({
        success: true,
        message: "Section deleted",
        data: course,
      })
    } catch (error) {
      console.error("Error deleting section:", error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }