import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { StudentDataContext } from "../../context/StudentDataProvider/StudentDataContext";
import { toast } from "react-toastify";

/***
 * address:"Dhaka, Bangladesh"
description:"Hardworking and regular student"
gunaboli:(3) ['honest', 'punctual', 'team player']
id:1
img:"https://i.pravatar.cc/150?img=1"
name:"Rahim Uddin"
presentCount:45
registrationNumber:"REG2026001"
roll:101
shift:"1st"
tag:"science"
 */

const StudentsDetails = () => {
  const { id } = useParams();
  const studentsData = useLoaderData();
  const {timelineData, setTimelineData} = useContext(StudentDataContext)

  const expectedStudents = studentsData.find(
    (student) => student.id === Number(id),
  );

  const handlePresent = (passStudent)=>{
    const isExist = timelineData.find(data=> data.id == passStudent.id);
    if(isExist){
      toast.error("This student already present..")
    }else if(!isExist){
      setTimelineData([...timelineData, passStudent]);
      toast.success(`${passStudent.name} was Present`);
    }
  }

  // console.log(studentsData, id);
  //   console.log(expectedStudents, "expected data");
  return (
    <div className="w-[90%] sm:w-[70%] flex items-center sm:items-start flex-col md:flex-row gap-5 mx-auto py-25">
      {/* left side */}
      <div className="w-full md:w-[29%] space-y-3">
        <div className="bg-base-200 border border-gray-200 py-8 px-4 flex items-center justify-center  rounded-lg">
          <div className="text-center">
            <div className="w-30 rounded-full overflow-hidden border border-gray-200">
              <img src={expectedStudents.img} alt={expectedStudents.name} />
            </div>
            <div className="mt-3 space-y-2">
              <p className="badge badge-info text-white ">{expectedStudents.tag}</p>
              <p className="text-green-950 text-xl font-bold">5th | {expectedStudents.shift}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center gap-2.5 rounded-lg">
          <button onClick={()=> handlePresent(expectedStudents)} className="btn btn-success btn-outline w-full text-xl hover:text-white">Present</button>
          <div onClick={()=> toast.success(`calling ${expectedStudents.name}`)} className="w-full text-xl font-semibold btn btn-info text-white">Call him</div>
          <div onClick={()=> toast.info(`Sorry! You can't Delete right now..`)} className="bg-red-400 text-white border border-gray-200 py-3 w-full text-center rounded-sm text-xl font-semibold">Delete</div>
        </div>
      </div>
      {/* right side */}
      <div className="bg-base-200 w-full flex-1 border border-gray-200 py-4 px-6 space-y-3 rounded-sm shadow-lg">
        <h1 className="text-2xl sm:text-4xl font-bold text-green-950">Chandpur Polytechnic Institute (CDPI)</h1>
        <h3 className="text-lg font-semibold">Focus on Good Learning.</h3>
        <hr className="text-gray-400 my-4"/>
        <h1 className="text-lg font-medium">Student name : <span className="italic font-normal text-xl">{expectedStudents.name}</span></h1>
        <h2 className="text-lg font-medium">Semester : <span className="italic font-normal text-xl">5th | {expectedStudents.shift}</span></h2>
        <p className="text-lg font-medium">Student Roll : <span className="italic font-normal text-xl">{expectedStudents.roll}</span></p>
        <p className="text-lg font-medium">Student Reg No. : <span className="italic font-normal text-xl">{expectedStudents.registrationNumber}</span></p>
        <p className="text-lg font-medium">Student Address : <span className="italic font-normal text-xl">{expectedStudents.address}</span></p>
        <p className="text-lg font-medium">Student Description : <span className="italic font-normal text-xl">{expectedStudents.description}</span></p>
        <p className="text-lg font-medium">Student Total Present : <span className="italic font-normal text-xl">{expectedStudents.presentCount}</span></p>
        <p className="text-lg font-medium">Tag : <span className="bg-yellow-100 py-1 px-2 border border-yellow-500 rounded-full text-yellow-600">{expectedStudents.tag}</span></p>
        <p className="space-x-2.5">Ability : {
            expectedStudents.gunaboli.map((gun, ind)=> <span key={ind} className="bg-green-100 py-1 px-2 border border-green-500 rounded-full text-green-600">{gun}</span>)
            }</p>
      </div>
    </div>
  );
};

export default StudentsDetails;
