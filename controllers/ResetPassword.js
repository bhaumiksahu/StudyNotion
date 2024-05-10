const User=require("../models/User");
const mailSender=require("../utils/mailSender");
const bcrypt=require("bcrypt");

//resetPasswordToken
exports.resetPasswordToken=async(req,res)=>{
try {
    //get email from req body
    const{email}=req.body;
    //check user for this email
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Your email is not registered",
        })
    }
    //generate token
    const token=crypto.randomUUID();
    //update user by adding token and expiration time
    const updateDetails=await User.findOneAndUpdate({email},{
        token:token,
        resetPasswordExpires:Date.now()+5*60*1000,
    },
    {new:true});
    //createUrl
    const url=`http://localhost:3000/update-password/${token}`;
    //mailsend
    await mailSender(
        email,
        "Password Reset Link",
        `Password Reset Link: ${url} `
    );
    return res.status(200).json({
        success:true,
        message:"Please check email and Reset Password "
    })
}
catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Something went wrong while sending mail"
    })   
    }


}

//resetpassword
exports.resetPassword=async(req,res)=>{
    try {
        //data fetch
        const {password,confirmPassword,token}=req.body;
        //validation
        if(password!==confirmPassword){
            return res.status(401).json({
                success:false,
                message:"Paswords Not Matching"
            })    
        }
        //getuserdetail from token
        const user =await User.findOne({token:token});
        //if no entry invalid token
        if(!user){
            return res.status(401).json({
                success:false,
                message:"token invalid"
            })   
        }
        //token time check
        if(user.resetPasswordExpires<Date.now()){
            return res.status(401).json({
                success:false,
                message:"Token is expired please regenerate token"
                })   
            }
        //hash password
        const hashedpassword=await bcrypt.hash(password,10);
        //pasword update
        await User.findOneAndUpdate( {token:token},
        {password:hashedpassword},
        {new:true},
        )
        //return response
            return res.status(200).json({
                success:true,
                message:"Password Reset Successful"
            })
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Something went wrong while reseting password"
        })
    }
}