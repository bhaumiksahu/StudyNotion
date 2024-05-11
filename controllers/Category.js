const Category=require("../models/Category");

//creating tag
exports.createCategory=async(req,res)=>{
    try {
        const{name,description}=req.body;
        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }
        const category=await Category.create({
            name:name,
            description:description,
        })
        return res.status(200).json({
            success:true,
            message:"Category created successfully"
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
exports.showAllCategory=async(req,res)=>{
    try {
       const allCategory=await Category.find({},{name:true},{description:true});
       return res.status(200).json({
        success:true,
        message:"All Category returned Successful"
       }) ;
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Category not found"
           });
    }
}