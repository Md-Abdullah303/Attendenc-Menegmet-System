import React from "react";
import { FcOk } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";

/***
 * address:"Khulna, Bangladesh"
description:"Tech enthusiast student"
gunaboli:(3) ['curious', 'innovative', 'quick learner']
id:6
img:"https://i.pravatar.cc/150?img=6"
name:"Tanvir Ahmed"
presentCount:39
registrationNumber:"REG2026006"
roll:106
shift:"2nd"
tag:"science"
 */

const StudentPageCardContainer = ({ studentsData }) => {
  return (
    <div className="space-y-3.5">
      {studentsData.map((student) => (
        <div
          key={student.id}
          className="border shadow-sm bg-base-200 border-gray-300 p-5 rounded-lg flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full overflow-hidden border border-gray-300 object-center">
              <img className="w-full object-center" src={student.img} alt={student.name} />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 ">
              <div className="">
                <h1>{student.name}</h1>
                <h2>CST | 5th {student.shift}</h2>
              </div>
              <div className="sm:border-l border-t md:px-3 pt-2 border-gray-300">
                <p>Roll : {student.roll}</p>
                <p>Reg No. : {student.registrationNumber}</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col-reverse f sm:flex-row items-end sm:items-center gap-3">
            <button className="btn text-sm sm:text-lg btn-success text-white border-none">
              Present
            </button>
            <Link to={`/student/${student.id}`}><button className="btn btn-info btn-outline text-sm sm:text-lg hover:text-white">
               Details
            </button></Link>
            <button className="btn btn-ghost bg-red-400 text-white text-xl rounded-full p-1 h-10 w-10">
              <MdDeleteForever />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentPageCardContainer;
