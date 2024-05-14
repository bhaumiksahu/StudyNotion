import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className='relative mx-auto flex-col w-11/12 items-center text-white flex justify-between max-w-maxContent'>

        <Link to={"signup"}>
            <div className='mx-auto rounded-full  bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit mt-16 p-1 group'>
                <div className=' gap-3 flex flex-row items-center rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become a Instructor</p>
                    <FaArrowRight />
                </div>
            </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with
            <HighlightText text={" Coding Skills"}/>
        </div>

        <div className='w-[90%] text-lg  text-center mt-4 font-bold text-richblack-300'>
            <p>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </p>
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}>
                Learn More
            </CTAButton >

            <CTAButton active={false} linkto={"/login"}>
                Book a Demo
            </CTAButton>
        </div>

        <div className='shadow-blue-200 mx-3 my-14 shadow-[10px_-5px_30px_-5px]'>
           <video className="shadow-[20px_10px_rgba(255,255,255)]" muted loop autoPlay>
            <source src={Banner}/>
           </video>
        </div>
      </div>



      {/* Section 1 */}




      {/* Section 1 */}




      {/* Footer */}
    </div>
  )
}

export default Home
