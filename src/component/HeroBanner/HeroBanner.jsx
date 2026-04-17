import React from "react";
import HeroBannerImg from '../../assets/chandpur polytech pic.jpg'

const HeroBanner = () => {
  return (
    <div>
      <div className="hero bg-base-200 h-[90vh]">
        <div className="hero-content w-[90%] px-6 container flex-col lg:flex-row-reverse">
          <img
            src={HeroBannerImg}
            className=" rounded-lg w-100 sm:w-150  shadow-lg"
          />
          <div className="">
            <h1 className="text-5xl font-bold">Chandpur Polytechnic Institute</h1>
            <p className="py-6">
              Chandpur Polytechnic Institute is a government technical institute in Bangladesh. It provides diploma engineering education with skilled teachers, practical labs, and helps students build technical skills for future careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn bg-purple-400 border-none text-white">View Attendance </button>
                <button className="btn btn-info btn-outline">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
