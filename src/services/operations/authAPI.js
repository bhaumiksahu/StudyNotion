import toast from "react-hot-toast";
import { setLoading } from "../../slices/authSlice"
import { apiConnector } from "../apiconnector";
import { endPoint } from "../apis";

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
        toast.error("fail to sent otp while resetting password")
        console.log("reset failed")
        console.log(error.message);
    }
    dispatch(setLoading(false));
}
}