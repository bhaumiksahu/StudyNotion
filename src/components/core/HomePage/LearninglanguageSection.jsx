import React from 'react'
import HighlightText from './HighlightText'
import Know_your_progress from "../../../assets/Images/Know_your_progress.svg"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg"
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg"
import CTAButton from "../../../components/core/HomePage/Button";
const LearninglanguageSection = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-center mt-32">
            Your swiss knife for
            <HighlightText text={" learning any language"} />
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
              <img src={Know_your_progress} alt='' className='-mr-32'/>
              <img src={Compare_with_others} alt="" />
              <img className='-ml-36' src={Plan_your_lessons} alt="" />
            </div>
            <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </CTAButton>
          </div>
        </div>
    </div>
  )
}

export default LearninglanguageSection
