import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearninglanguageSection from "../components/core/HomePage/LearninglanguageSection"
import Instructor from '../components/core/HomePage/Instructor';
import Explore from '../components/core/HomePage/Explore';
import Footer from "../components/common/Footer"
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

        {/* video part */}
        <div className='shadow-blue-200 mx-3 my-14 shadow-[10px_-5px_30px_-5px]'>
           <video className="shadow-[10px_5px_rgba(255,255,255)] lg:h-[550px]  " muted loop autoPlay>
            <source src={Banner}/>
           </video>
        </div>

        {/* codeSection 1 */}
        <div>
            <CodeBlocks position={"lg:flex-row flex-col"} heading={
                <div className='text-4xl font-semibold'>
                  Unlock Your
                  <HighlightText text={" coding potential "}/>
                  with our online course
                </div>
              } subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={
                {
                  text:"try it yourself",
                  linkto:"/signup",
                  active:true
                }
              }
              ctabtn2={
                {
                  text:"learn more",
                  linkto:"/login",
                  active:false
                }
              }
               codeBlockStyle ={ {
                borderRadius: '100%',
                filter: 'blur(34px)',
                height: '250px',
                left: '0.1%',
                opacity: 0.15,
                top: '0.1%',
                width: '370px',
                position:"absolute",
                background: 'linear-gradient(123.77deg, #8a2be2 -6.46%, orange 59.04%, #f8f8ff 124.53%)'
            }}
                border={
                { 
                  border:"2px solid rgb(72,72,72)",
                  padding:"11px",
                  background:"linear-gradient(111.93deg, rgba(14, 26, 45, .24) -1.4%, rgba(17, 30, 50, .38) 104.96%)"
                }
              }
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              codeColor={"text-yellow-25"}
            />
        </div>
        {/* codeSection 2 --*/}
        <div >
          <CodeBlocks position={"lg:flex-row-reverse flex-col"}
          heading={
            <div className='text-4xl font-semibold '>
              Start 
              <HighlightText text=" coding in seconds"/>
            </div>
          }  
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1={
            {
              text:"Continue Lesson",
              active:true,
              linkto:"/login"
            }
          }
          ctabtn2={
            {
              text:"Learn More",
              active:false,
              linkto:"/signup"
            }
          } 
          codeBlockStyle ={ {
            borderRadius: '100%',
            filter: 'blur(34px)',
            height: '250px',
            left: '0.1% ',
            opacity: 0.15,
            top: '0.1% ',
            width: '370px',
            position:"absolute",
            background: 'linear-gradient(118.19deg, #1fa2ff -3.62%, #12d8fa 50.44%, #a6ffcb 104.51%)'
        }}
        border={
          { 
            border:"2px solid rgb(72,72,72)",
            padding:"11px",
            background:"linear-gradient(111.93deg, rgba(14, 26, 45, .24) -1.4%, rgba(17, 30, 50, .38) 104.96%)"
          }}
          codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          />
        </div>

        <Explore/>
      </div>

      {/* Section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700 '>
          {/* part 1 */}
          <div className='homePage_bg lg:h-[300px] h-[150px]'>
              <div className='w-11/12 max-w-maxContent flex items-center gap-5 mx-auto justify-center'>
                <div className='lg:h-[500px] h-[150px]'></div>
                <div className=' flex gap-7 text-white justify-center item'>
                  <CTAButton linkto={"/signup"} active={true}
                  >
                  <div className='flex items-center gap-3'>
                    Explore Full Catalog
                    <FaArrowRight/>
                  </div>
                  </CTAButton>
                  <CTAButton active={false} linkto={"/login"}>
                    Learn More
                  </CTAButton>
                </div>
              </div>
          </div>

          {/* part-2 */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">

            {/* flex-row */}
            <div className='lg:flex  gap-5 justify-between mb-10 mt-[40px]'>
              <div className='text-4xl font-semibold lg:w-[45%] w-[90%]'>
              Get the Skills you need for a
              <HighlightText text={" Job that is in demand "}/>
              </div>
              
              <div className='flex flex-col gap-10 lg:w-[45%] w-[90%] items-start'>
               <div className='text-[16px] mt-4 lg:mt-0 '>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                Learn More
               </CTAButton>

              </div>
              
             </div>
             <TimelineSection />

             <LearninglanguageSection />
          </div>

         

      </div>

      {/* Section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

         <Instructor/>

         <h2 className='text-center text-4xl font-semibold mt-10'>review from other Learners</h2>


      </div>



      {/* Footer */}
      <div>
          <Footer/>
      </div>
    </div>
  )
}

export default Home
