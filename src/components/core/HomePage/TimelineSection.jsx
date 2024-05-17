import React from 'react'

import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImg from "../../../assets/Images/TimelineImage.png"
const timeline = [
    {
        logo:logo1,
        heading:"Leadership",
        text:"Fully committed to the success company"
    },
    {
        logo:logo2,
        heading:"Responsibility",
        text:"Students will always be our top priority"
    },
    {
        logo:logo3,
        heading:"Flexibility",
        text:"The ability to switch is an important skills"
    },
    {
        logo:logo4,
        heading:"Solve the problem",
        text:"Code your way to a solution"
    }
]
const TimelineSection = () => {
  return (
    <div>
       <div className='lg:flex gap-15 justify-between items-center'>
          
           <div className='lg:w-[45%] flex flex-col gap-5 '>
             {/* <div className='h-10'> </div> */}
              { 
                timeline.map((ele,index)=>{
                    return(
                      <div className='flex flex-col'>
                         <div key={index}  className='flex flex-row gap-6'>
                            <div className='w-[50px] h-[50px] bg-pure-greys-25 flex items-center rounded-full justify-center'>
                                <img src={ele.logo} alt=''/>
                            </div>

                            <div>
                               <h2 className='font-semibold text-[18px] '>{ele.heading}</h2>
                               <p className='text-base'>{ele.text}</p> 
                            </div>
                            <div className='h-14'></div>
                         </div>
                         <div className={`hidden ${ timeline.length - 1 === index ? "hidden" :"lg:block"}  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}>
                         </div>
                       
                      </div>
                        
                    )
                })
              }
           </div>
            
            <div className='relative mt-8 lg:mt-0'>
                <div className="  shadow-blue-200 shadow-[0px_0px_30px_0px]">
                   <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-6 ">
                      {/* Section 1 */}
                      <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
                      <h1 className="text-3xl font-bold w-[75px]">10</h1>
                      <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                       Years experiences
                      </h1>
                      </div>

                      {/* Section 2 */}
                     <div className="flex gap-5 items-center lg:px-14 px-7">
                        <h1 className="text-3xl font-bold w-[75px]">250</h1>
                        <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                       types of courses
                        </h1>
                     </div>
                    </div>
                </div>
                <div className='shadow-blue-200 shadow-[0px_-1px_30px_-1px]'>
                   <img className='shadow-[10px_5px_rgba(255,255,255)] h-[400px] lg:h-fit' src={timelineImg} alt=''/> 
                </div>
            </div>
           
     
       </div>
    </div>
  )
}

export default TimelineSection
