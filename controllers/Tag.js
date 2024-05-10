const Tag=require("../models/Tag");

//creating tag
exports.createTag=async(req,res)=>{
    try {
        const{name,description}=req.body;
        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }
        const tag=await Tag.create({
            name:name,
            description:description,
        })
        return res.status(200).json({
            success:true,
            message:"Tag created successfully"
        }) 
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        }) 
    }
}

//show all tag
exports.showAllTag=async(req,res)=>{
    try {
       const allTag=await Tag.find({},{name:true},{description:true});
       return res.status(200).json({
        success:true,
        message:"All tags returned Successful"
       }) ;
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"tags not found"
           });
    }
}