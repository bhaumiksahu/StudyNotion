import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { resetPassword } from '../services/operations/authAPI'
import { BiArrowBack } from 'react-icons/bi'

const UpdatePassword = () => {

const dispatch=useDispatch()
const {loading}=useSelector((state)=>state.auth)
const [showPassword,setShowPassword]=useState(false)
const [showConfirmPassword,setShowConfirmPassword]=useState(false)

const [formData,setFormData]=useState({
    password:"",
    confirmPassword:""
})
const changeHandler=(e)=>{
    setFormData((prev)=>(
       {
        ...prev,
        [e.target.name]:e.target.value
       } 
    ))
}
const {password,confirmPassword}=formData;
const location=useLocation();
const handleOnSubmit = (e)=>{
    e.preventDefault();
    const token=location.pathname.split("/").at(-1);
    console.log(token)
    dispatch(resetPassword(password,confirmPassword,token))
}
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        {
            loading?(<p>loading..</p>):(
                <div className="max-w-[500px] p-4 lg:p-8">
                    <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">Change New Password</h1>
                    <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">Almost done, Enter your password and yours all set</p>
                    <form onSubmit={handleOnSubmit}>
                        <label className="relative">
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">New Password<sup className="text-pink-200">*</sup></p>
                            <input
                            required
                            type={showPassword?"text":"password"}
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder='New Password'
                            className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full"
                            />
                            <span onClick={() =>setShowPassword((prev)=>!prev)}  className="absolute right-3 top-[36px] z-[10] cursor-pointer">
                            {
                            showPassword?<AiFillEyeInvisible fontSize={24} fill="#AFB2BF"/>:<AiFillEye fontSize={24} fill="#AFB2BF"/>
                            }
                            </span>
                        </label>

                        <label className="relative mt-3 block">
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Confirm New Password<sup className='text-pink-200'>*</sup></p>
                            <input
                            required
                            type={showConfirmPassword?"text":"password"}
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='Confirm New Password'
                            className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full"
                            />
                            <span onClick={() =>setShowConfirmPassword((prev)=>!prev)} className="absolute right-3 top-[36px] z-[10] cursor-pointer">
                            {
                            showConfirmPassword?<AiFillEyeInvisible fontSize={24}  fill="#AFB2BF" />:<AiFillEye fontSize={24} fill="#AFB2BF" />
                            }
                            </span>
                        </label>
                        <button type='submit'
                        className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                            Reset Password
                        </button>
                    </form>
                    <div className="mt-6 flex items-center justify-between">
                    <Link to="/login">
                       <p className="flex items-center gap-x-2 text-richblack-5"><BiArrowBack />Back to login</p>
                    </Link>
            </div>
                </div>
            )
        }
    </div>
  )
}

export default UpdatePassword
