const User=require("../models/User");
const OTP=require("../models/OTP");
const otpGenerator=require("otp-generator");
const bcrypt=require("bcrypt");
const Profile=require("../models/Profile");
const jwt=require("jsonwebtoken")
require("dotenv").config();
// sendOTP
exports.sendOTP=async (req,res)=>{
    try {
        //fetch email from req body
        const {email}=req.body;
        //check if user already registered
        const user=await User.findOne({email});
    
        if(user){
            return res.status(401).json({
               success:false,
               message:"User Already Exist" 
            })
        } 
        //generate otp 
        let otp= otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })
        //check unquie otp generated 
        let result=await OTP.findOne({otp});
        //unquie otp not generated then find unquie until not get
        while(result){
            otp=otpGenerator.generate(6,{
                lowerCaseAlphabets:false,
                upperCaseAlphabets:false,
                specialChars:false,
            });
            result=await OTP.findOne({otp});
        }
        const payload ={email,otp};
        //create entry in Db
        const otpBody=await OTP.create(payload);
        //return response
        res.status(200).json({
            success:true,
            message:"OTP sent successfully",
        });
    } 
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:message.error, 
        }) 
    }
}

// signUP
exports.signUp=async (req,res) =>{
    try {
        //fetch the data from req body
        const{firstName,lastName,email,password,confirmPassword,accountType,otp,contactNumber}=req.body;
        //validate
        if(!firstName || !lastName || !email || !password  ||!confirmPassword){
            return res.status(403).json({
                success:false,
                message:"All fields are required",
            })
        }
        //check confirmpsd and psd are same
        if(password!==confirmPassword){
            return res.status(400).json({
                success:false,
                message:"password and confirmPassword value are not same",
            })
        }
        //check user already exist
        const user=await User.findOne({email});
        //user exist
        if(user){
            return res.status(400).json({
                success:false,
                message:"User is already registered",
            })
        }
        //find most recent otp
        const recentOtp=await OTP.findOne({email}).sort({createAt:-1}).limit(1);
        //validate otp
        if(recentOtp.length == 0){
            //not found
            return res.status(400).json({
                success:false,
                message:"Otp not found",
            })
        } 
        else if(otp !== recentOtp.otp){
            return res.status(400).json({
                success:false,
                message:"Invalid Otp",
            })
        }
        //hash password
        const hashedpassword=await bcrypt.hash(password,10);
        //create entry in Db
        const profileDetails=await Profile.create({
            dateOfBirth:null,
            gender:null,
            contactNumber:null,
            about:null
        })
        const USER= await User.create({
            email,
            firstName,lastName,password:hashedpassword,
            accountType,contactNumber,additionalDetail:profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        })
        return res.status(200).json({
            success:true,
            user,
            message:"User is registered successful"
        })
    } 
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User failed to registered"
        })
    }
}

// login
exports.login=async(req,res)=>{
try {
        const{email,password}=req.body;

    if(!email || !password){
        return res.status(403).json({
            success:false,
            message:"Please fill all detail",
        });
    }
    const user=await User.findOne({email}).populate("additionalDetail"); 
    if(!user){
        return res.status(401).json({
            success:false,
            message:"User not registered",
        });
    }
    
    if(await bcrypt.compare(password,user.password)){
        const payload={
            email:user.email,
            id:user._id,
            accountType:user.accountType
        }
        const token=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"2h"
        })
        user.token=token;
        user.password=undefined;

        //create cookie
        const options={
            expires: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly:true
        }
        res.cookie("token",token,options).status(200).json({
            success:true,
            user,
            token,
            message:"User logged in Successful"
        })
    }else{
        return res.status(401).json({
            success:false,
            message:"Password is incorrect",
        });
    }
}catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure",
        });
    }
}

//changePassword
exports.changePassword=async(req,res)=>{

}