import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
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
           <video className="shadow-[20px_10px_rgba(255,255,255)]" muted loop autoPlay>
            <source src={Banner}/>
           </video>
        </div>

        {/* codeSection 1 */}
        <div>
            <CodeBlocks position={"lg:flex"} heading={
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
              const codeBlockStyle ={ {
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
           
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              codeColor={"text-yellow-25"}
            />
        </div>
        {/* codeSection 2 */}
        <div >
          <CodeBlocks position={"lg:flex-row-reverse"}
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
          codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          />
        </div>
      </div>

        


      {/* Section 2 */}




      {/* Section 3 */}




      {/* Footer */}
    </div>
  )
}

export default Home
