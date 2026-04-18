import React, { useContext } from "react";
import { StudentDataContext } from "../../context/StudentDataProvider/StudentDataContext";
import StudentsNotFound from "../../component/StudentsNotFound/StudentsNotFound";
import { Link } from "react-router";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const TimelinePage = () => {
  const { timelineData, setTimelineData } = useContext(StudentDataContext);


  const handleDeleted = (dltStudent)=>{
    const newFilterStudents = timelineData.filter(data=> data.id !== dltStudent.id);
    setTimelineData(newFilterStudents);
    toast.error(`${dltStudent.name} was Absent `)
  }
  return (
    <div className="w-[90%] sm:container space-y-3.5  mx-auto pt-20 pb-10">
      <h1 className="text-xl sm:text-3xl font-bold text-green-950">
        Today's Present
      </h1>

      <div className={`space-y-4
        ${timelineData.length == 0 && 'pb-0'}   
        ${timelineData.length == 1 && 'pb-[50vh]'}
        ${timelineData.length == 2 && 'pb-[45vh]'}
        ${timelineData.length == 3 && 'pb-[30vh]'} 
        ${timelineData.length == 4 && 'pb-[20vh]'}`}>
        {timelineData.length === 0 ? (
          <StudentsNotFound></StudentsNotFound>
        ) : (
          timelineData.map((item) => (
            <div key={item.id} className="">
              <div
                key={item.id}
                className="border shadow-sm bg-base-200 border-gray-300 p-5 rounded-lg flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full overflow-hidden border border-gray-300 object-center">
                    <img
                      className="w-full object-center"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 ">
                    <div className="">
                      <h1>{item.name}</h1>
                      <h2>CST | 5th {item.shift}</h2>
                    </div>
                    <hr className="rotate-0 sm:rotate-90 py-0 w-full sm:w-12"/>
                    <div className=" md:px-3 pt-2 border-gray-300">
                      <p>Roll : {item.roll}</p>
                      <p>Reg No. : {item.registrationNumber}</p>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col-reverse f sm:flex-row items-end sm:items-center gap-3">
                  <Link to={`/student/${item.id}`}>
                    <button className="btn btn-info btn-outline text-sm sm:text-lg hover:text-white">
                      Details
                    </button>
                  </Link>
                  <button onClick={() => handleDeleted(item)} className="btn btn-ghost bg-red-400 text-white text-xl rounded-full p-1 h-10 w-10">
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
