import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText';

const tableName=["Free","New to coding","Most popular","Skill paths","Career paths"]
const Explore = () => {
    
    const [currentTab,setCurrentTab]=useState(tableName[0]);
    const [course,setCourse]=useState(HomePageExplore[0].courses);
    const [currCard,setCurrCard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards=(value)=>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=> 
            (course.tag===value)
        )
        setCourse(result);
        setCurrCard(result[0].courses[0].heading)
    }
    return (
    <div className='flex flex-col'>
        <div className='text-4xl font-semibold text-center'>
            Unlock the 
            <HighlightText text={" Power of Code"}/>
        </div>

        <p className='text-center text-richblack-300 text-sm text-[16px] mt-3 '>learn to build anything you can imagine</p>

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

    </div>
  )
}

export default Explore
