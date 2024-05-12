const {instance} =require("../config/razorpay");
const Course=require("../models/Course");
const mailSender=require("../utils/mailSender");
const {courdeEnrollmentEmail}=require("../mail/template/courseEnrollmentEmail");
const User = require("../models/User");

//capture the payment and initialize the order pay
exports.capturePayment=async(req,res)=>{
    //get courseID and userId
    const {courseID}=req.body;
    const userId=req.user.id;

    //validcourseid
    if(!courseID){
        return res.status(400).json({
            success:false,
            message:"Please enter valid course id"
        })
    }
    
    try {
        //validcoursedetail
        const courseDetail=await Course.findById(courseID);
        if(!courseDetail){
            return res.status(404).json({
                 success:false,
                message:"Course Not Found"
            })
        }
        //user already pay 
        const userDetail=await User.findById(userId);
        if(courseDetail.userEnrolled.includes(userDetail._id)){
            return res.status(200).json({
                success:false,
                message:"User already enrolled"
            })
        } 
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }

    //order create
    const amount=courseDetail.price;
    const currency="INR";

    const options={
        amount:amount * 100,
        currency:currency,
        receipt:Math.random(Date.now()).toString(),
        notes:{
            courseId:courseID,
            userId,
        } 
    }
    try {
        //initiate the payment using razorpay
        const paymentResponse=await instance.orders.create(options);
        console.log(paymentResponse);

        return res.status(200).json({
            success:true,
            courseName:courseDetail.courseName,
            courseDescription:courseDetail.courseDescription,
            orderId:paymentResponse._id,
            thumnail:courseDetail.thumbnail,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount,
        })
    } 
    catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//verify signature
exports.verifySignature=async(req,res)=>{
    const webHookSecret="987654321" ;
    const signature=req.header("x-razorpay-signature");
    const shasum=crpto.createHmac("sha256",webHookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest=shasum.digest("hex");

    if(signature===digest){
        console.log("payment is authorized");
        const {userId,courseId}=req.body.payload.payment.entity.notes; 

        //action
        try {
            //enroll course
            const enrolledCourse=await Course.findOneAndUpdate({_id:courseId},
                {$push:{userEnrolled:userId}},
                {new:true}
            )
            if(!enrolledCourse){
                return res.status(400).json({
                    success:false,
                    message:"Course not found"
                })
            }
            const enrolledStudent=await User.findOneAndUpdate({_id:userId},
                {$push:{courses:courseId}},
                {new:true}
            )
            if(!enrolledStudent){
                return res.status(400).json({
                    success:false,
                    message:"Students not found"
                })
            }
            //mail send
            const emailResponse=await mailSender(enrolledStudent.email,"congratulation from edtech","Congratulation you are enrolled");

            return res.status(200).json({
                success:true,
                message:"Signature verified"
            })
        } 
        catch(error) {
            return res.status(500).json({
                success:false,
                message:error.message
            })
        }
    }
    else{
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}