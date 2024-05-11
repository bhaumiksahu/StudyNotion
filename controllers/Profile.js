const Profile=require("../models/Profile");
const User = require("../models/User");

exports.updateProfile=async(req,res)=>{
    try {
        const {dateOfBirth="",about="",contactNumber,gender}=req.body;

        const userId=req.user.id;

        if(!contactNumber||!gender||!userId){
            return res.status(400).json({
                success:false,
                message:"All details are required"
            })
        }

        const userDetail=await User.findById(userId);
        const ProfileId=userDetail.additionalDetail;
        const profileDetails=await Profile.findById(ProfileId);

        //update profile
        profileDetails.dateOfBirth=dateOfBirth;
        profileDetails.gender=gender;
        profileDetails.about=about;
        profileDetails.contactNumber=contactNumber;

        await profileDetails.save();

        return res.status(200).json({
            success:true,
            profileDetails,
            message:"Profile Updated successful"
        })
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"failed to update profile",
            error:error.message
        })
    }
}

exports.deleteAccount=async(req,res)=>{
    try {
        const id=req.user.id;
        const userdetail=await User.findById(id);
        if(!userdetail){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        };
        const profileid=userdetail.additionalDetail;
        await Profile.findByIdAndDelete({_id:profileid});
        //TODO delete from enrol user
        await User.findByIdAndDelete({_id:id});
        

    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"failed to delete account"
        })
    }
}

exports.getAllUserDetail = async(req,res)=>{
    try{
        const id = req.user.id;

        const userDetail= await User.findById(id).populate("additionalDetail").exec();

        res.status(200).json({
            success:true,
            message:"Details fetch Successful"
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"failed to fetch details"
        });
    }
}