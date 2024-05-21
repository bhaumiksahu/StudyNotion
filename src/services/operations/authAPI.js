import toast from "react-hot-toast";
import { setLoading } from "../../slices/authSlice"
import { apiConnector } from "../apiconnector";
import { endPoint } from "../apis";


export const signUp=(firstName,lastName,email,password,confirmPassword,accountType,otp,navigate)=>{
        return async (dispatch)=>{
            dispatch(setLoading(true))
            //const toastId=toast.loading("loading...");
            try {
                const response=await apiConnector("POST",endPoint.SIGNUP_API,{
                    firstName,lastName,email,password,confirmPassword,accountType,otp
                })
                if(!response.data.success){
                    throw new Error(response.data.message)
                }
                toast.success("Signup successful")
                navigate("/login")
            }catch(error){
                console.log("SIGNUP API ERROR............", error)
                toast.error("Signup Failed")
                navigate("/signup")
            }
            //toast.dismiss(toastId)
            dispatch(setLoading(false));
        }
}

export const sentOtp=(email,navigate)=>{
    return async (dispatch)=>{
        dispatch(setLoading(true))
       // const toastId=toast.loading("Loading..");
        try {
            const response=await apiConnector("POST",endPoint.SENDOTP_API,{email});
            if(!response.data.success){
               // throw new Error(response.data.message) 
               toast.error(response.data.message)  

            }
            toast.success("OTP Sent successfully")
            navigate("/verify-email")
        }catch(error){
            toast.error(error.message)
        }
        dispatch(setLoading(false));
        //toast.dismiss(toastId)
    }
}

export const getPasswordResetToken=(email,setEmailSent)=>{
    return async (dispatch)=>{
        dispatch(setLoading(true));
        try {
            const response=await apiConnector("POST",endPoint.RESETPASSWORDTOKEN_API,{email});
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("Reset Email Sent");
            setEmailSent(true);
        }catch(error){
            toast.error("fail to sent otp while resetting password")
            console.log("reset failed")
            console.log(error.message);
        }
        dispatch(setLoading(false));
    }
}

export const resetPassword=(password,confirmPassword,token)=>{
    return async (dispatch)=>{
    dispatch(setLoading(true));
    try {
        const response=await apiConnector("POST",endPoint.RESETPASSWORD_API,{password,confirmPassword,token});
        console.log(response)
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success("Password Reset successfully")
    }
     catch (error) {
        toast.error("fail to reset password")
        console.log("reset failed")
        console.log(error.message);
    }
    dispatch(setLoading(false));
}
}
