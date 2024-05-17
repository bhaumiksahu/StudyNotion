import React from "react";
import CTAButton from "../HomePage/Button"
//import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const CodeBlocks = ({position,heading,subheading,ctabtn1,ctabtn2,codeblock,codeBlockStyle,codeColor,border}) =>{
    return(
        <div className={`flex ${position} my-20 justify-between gap-10`}>
            {/* Section 1 */}
            <div className="lg:w-[50%] flex flex-col gap-8 w-[90%] ">
                {heading}
                <div className="text-richblack-300 font-bold md:w-[90%]">
                    {subheading}
                </div>
                <div className="flex gap-7 mt-7">
                    <CTAButton
                    linkto={ctabtn1.linkto} active={ctabtn1.active}>
                       <div className="flex gap-2 items-center">
                            {ctabtn1.text}
                            <FaArrowRight/>
                       </div>
                    </CTAButton>
                    <CTAButton
                    linkto={ctabtn2.linkto} active={ctabtn2.active}>
                            {ctabtn2.text}
                    </CTAButton>
                </div>
            </div>
            {/* Section 2 */}
            <div className={`flex h-fit text-10 w-[100%] relative lg:w-[500px] `} style={border}>
                
                <div className="flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                <div className={`w-[95%] flex-col gap-2 font-bold font-mono pr-2 ${codeColor} `}>
                    <div  style={codeBlockStyle}>
                    </div>
                    <TypeAnimation
                        sequence={[codeblock,1000,""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace:"pre-line",
                                // display:"block"
                            }
                       } 
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>
        </div>
    )
}
export default CodeBlocks