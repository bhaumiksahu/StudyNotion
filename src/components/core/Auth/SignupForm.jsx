import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';

const SignupForm = () => {
    const changeHandler=(e)=>{
        setShowData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
    }
    const [showData,setShowData]=useState({email:"",firstName:"",lastName:"",password:"",confirmPassword:""});
    const[showPassword,setShowPassword]=useState([false]);
    const[showConfirmPassword,setShowConfirmPassword]=useState([false])
    return (
    <form  className='flex w-full flex-col gap-y-4'>
        {/* first and last name */}
        <div className='flex gap-x-4'>
            <label>
                <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>FirstName<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                value={showData.firstName}
                placeholder="Enter first name"
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>
            <label>
                <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>LastName<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                value={showData.lastName}
                placeholder="Enter last name"
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>
        </div>

        <label>
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            value={showData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          /> 
        </label>

        <div  className='flex gap-x-4'>
        <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        Create Password <sup className="text-pink-200">*</sup>
        </p>
        <input
        type={showPassword?"text":"password"}
        name="password"
        value={showData.password}
        onChange={changeHandler}
        placeholder="Enter Password"
        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
        <span onClick={()=>setShowPassword((prev)=>!prev)}
        className="absolute right-3 top-[38px] z-[10] cursor-pointer">
            {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEye fontSize={24} fill="#AFB2BF" className='left-3 top-[38px] z-[10]' />
              )}
        </span>
          </label>

          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={showData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
          <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
          >
          Create Account
        </button>

    </form>
  )
}

export default SignupForm
