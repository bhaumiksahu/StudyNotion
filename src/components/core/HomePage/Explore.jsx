import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tableName=["Free","New to coding","Most popular","Skills paths","Career paths"]
const Explore = () => {
    
    const [currentTab,setCurrentTab]=useState(tableName[0]);
    const [courses,setCourse]=useState(HomePageExplore[0].courses);
    const [currCard,setCurrCard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards=(value)=>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=> 
            (course.tag===value)
        )
        setCourse(result[0].courses);
        setCurrCard(result[0].courses[0].heading)
    }
    return (
    <div className=''>
        <div className='text-4xl font-semibold text-center'>
            Unlock the 
            <HighlightText text={" Power of Code"}/>
        </div>

        <p className='text-center text-richblack-300 text-lg mt-3 font-bold mb-3'>learn to build anything you can imagine</p>

        {/* tab */}
        <div className="hidden lg:flex gap-5  mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] mb-5 mt-8">
            {
                tableName.map((ele,i)=>{
                    return (
                     <div className={`text-[18px] flex items-center gap-7 ${currentTab===ele ?"bg-richblack-900 text-richblack-5 font-medium":"text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900  hover:text-richblack-5 p-2`} key={i} onClick={()=>{setMyCards(ele)}}>
                        {ele}
                     </div>   
                    )
                })
            }
           
        </div>

        <div className="hidden lg:block lg:h-[200px]"></div>
        
        <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%]  text-black lg:mb-0 mb-7 lg:px-0 px-3">
            {
                courses.map((ele,i)=>{
                    return (
                            
                            <CourseCard
                            currCard={currCard}
                            currData={ele}
                            key={i}
                            setCurrCard={setCurrCard}
                            />
                           
                    )
                })
            }
        </div>
        

    </div>
  )
}

export default Explore
