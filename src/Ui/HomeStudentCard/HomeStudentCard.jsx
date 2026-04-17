import React from "react";



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
          <h2 className="card-title text-2xl">{student.name}</h2>
          <p className="text-lg">Roll : {student.roll}</p>
          <p className="text-lg">Reg No. : {student.registrationNumber}</p>
          <p className="text-lg">Address : {student.address}</p>
          <div className="card-actions items-center justify-between">
            <button className="btn btn-ghost border border-purple-500 primary-t-color">Show Details</button>
            <div className=" space-x-3">
              {student.gunaboli.map((guna, ind) => (
                <div key={ind} className="badge badge-secondary badge-outline">
                  {guna}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStudentCard;
