import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import StudentPageCardContainer from "../../component/StudentPageCardContainer/StudentPageCardContainer";
import { ClockLoader } from "react-spinners";

const StudentsPage = () => {
  const [searchInp , setSearchInp] = useState('')
  const studentsData = useLoaderData();
  // console.log(searchInp);
  return (
    <div className="w-[90%] sm:container space-y-3.5  mx-auto pt-20 pb-10">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold italic text-green-950">
          Our Students
        </h1>
        <div className="flex">
          <input
          value={searchInp}
          onChange={(e)=> setSearchInp(e.target.value)}
            className="bg-gray-200 py-2 px-4 mx-3 w-30 sm:w-[15vw] text-lg outline-none rounded-lg"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <Suspense fallback={<ClockLoader />}>
        <StudentPageCardContainer
        searchInp={searchInp}
          studentsData={studentsData}
        ></StudentPageCardContainer>
      </Suspense>
    </div>
  );
};

export default StudentsPage;
