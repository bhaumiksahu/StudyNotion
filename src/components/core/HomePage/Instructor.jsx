import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import InstructorImg from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const Instructor = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-14 items-center mt-24">
          <div className="lg:w-[50%]">
            <img

              src={InstructorImg}
              alt=""
              className="shadow-white shadow-[-20px_-20px_0_0] w-[550px]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Become an
              <HighlightText text={" instructor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Instructor
