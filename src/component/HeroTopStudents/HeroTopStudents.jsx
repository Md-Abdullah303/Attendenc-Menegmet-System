import React, { Suspense } from "react";
import { MdOutlineAirlineStops } from "react-icons/md";
import { StudentDataContext } from "../../context/StudentDataProvider/StudentDataContext";
import { useLoaderData } from "react-router";
import HomeStudentsContainer from "../HomeStudentsContainer/HomeStudentsContainer";
import { ClockLoader } from "react-spinners";

const HeroTopStudents = () => {
  const studentsData = useLoaderData();
  // console.log(studentsData);

  return (
    <div className="w-[90%] sm:container mx-auto py-20">
      <h1 className="text-sm sm:text-2xl font-semibold flex items-center gap-2 text-green-950 ">
        <MdOutlineAirlineStops /> Our Top Students
      </h1>

      <Suspense fallback={<p>loding.....</p>}>
        <HomeStudentsContainer studentsData={studentsData}></HomeStudentsContainer>
      </Suspense>
    </div>
  );
};

export default HeroTopStudents;
