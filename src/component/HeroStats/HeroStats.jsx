import React from "react";
import Marquee from "react-fast-marquee";


const HeroStats = () => {
  return (
    <div className="bg-purple-300 ">
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      {/* <div className="flex items-center justify-center py-8 ">
        <div className="border-r border-gray-300 py-4 px-6 text-center space-y-2.5">
          <h2 className="text-[16px] sm:text-2xl text-white font-bold">
            Students passing Rat
          </h2>
          <p className="text-[14px] sm:text-2xl md:text-4xl text-gray-500 font-medium">
            80-85%
          </p>
        </div>
        <div className="border-r border-gray-300 py-4 px-6 text-center space-y-2.5">
          <h2 className="text-[16px] sm:text-2xl text-white font-bold">
            Admission Avg Students
          </h2>
          <p className="text-[14px] sm:text-2xl md:text-4xl text-gray-500 font-medium">
            5K
          </p>
        </div>
        <div className="py-4 px-6 text-center space-y-2.5">
          <h2 className="text-[16px] sm:text-2xl text-white font-bold">
            Yearly Exams
          </h2>
          <p className="text-[14px] sm:text-2xl md:text-4xl text-gray-500 font-medium">
            2
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroStats;
