import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ currCard,currData, setCurrCard}) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${
        currCard === currData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
          }  text-richblack-25 h-[300px] box-border cursor-pointer`}
         onClick={() => setCurrCard(currData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currCard === currData?.heading && "text-richblack-800"
          } font-semibold text-[20px]`}
        >
          {currData?.heading}
        </div>

        <div className="text-richblack-400">{currData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currCard === currData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{currData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{currData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard
