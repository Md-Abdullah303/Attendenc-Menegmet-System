import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import userImg from '../../assets/user-imag.png'

const HomeStudentCard = ({ student }) => {
  const handleToast = () => {
    toast.info(`You are in, ${student.name}`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // console.log(student);
  return (
    <div className="border border-gray-300 rounded-xl ">
      <div className="card bg-base-100 shadow-sm">
        <figure className=" p-3 object-cover object-center">
          <img
            className="w-30 shadow-sm  object-cover rounded-lg"
            src={userImg}
            alt={student.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{student.name}</h2>
          <p className="text-lg">Roll : {student.roll}</p>
          <p className="text-lg">Reg No. : {student.registrationNumber}</p>
          <p className="text-lg">Address : {student.address}</p>
          <div className="card-actions items-center justify-between">
            <Link onClick={() => handleToast()} to={`/student/${student.id}`}>
              <button className="btn btn-ghost border border-purple-500 primary-t-color">
                Show Details
              </button>
            </Link>
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
