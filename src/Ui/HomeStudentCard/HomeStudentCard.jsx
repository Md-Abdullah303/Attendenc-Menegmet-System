import React from "react";

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

const HomeStudentCard = ({ student }) => {
  // console.log(student);
  return (
    <div className="border border-gray-300 rounded-xl ">
      <div className="card bg-base-100 shadow-sm">
        <figure className="w-full h-60 object-cover object-center">
          <img
            className="w-full  object-cover rounded-lg"
            src={student.img}
            alt={student.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
            {student.name}
          </h2>
          <p className="text-lg">Roll : {student.roll}</p>
          <p className="text-lg">Reg No. : {student.registrationNumber}</p>
          <p className="text-lg">Address : {student.address}
          </p>
          <div className="card-actions justify-end">
            {
                student.gunaboli.map((guna, ind)=> <div key={ind} className="badge badge-secondary badge-outline">{guna}</div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStudentCard;
