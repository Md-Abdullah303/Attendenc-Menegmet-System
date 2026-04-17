import React from "react";
import HomeStudentCard from "../../Ui/HomeStudentCard/HomeStudentCard";

const HomeStudentsContainer = ({ studentsData }) => {
  // console.log(studentsData);
  return (
    <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {studentsData.slice(0,8).map((student) => (
        <HomeStudentCard key={student.id} student={student}></HomeStudentCard>
      ))}
    </div>
  );
};

export default HomeStudentsContainer;
