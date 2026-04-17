import React, { useEffect, useState } from "react";
import { StudentDataContext } from "./StudentDataContext";

const StudentDataProvider = ({ children }) => {
  const [spiner, setSpiner] = useState(true);
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setStudentsData(data);
      setSpiner(false);
    };
    fetchStudents()
  }, []);

  const data = {
    name: "abdullah",
    setSpiner,
    spiner,
    studentsData,
    setStudentsData,
  };
  return (
    <StudentDataContext.Provider value={data}>
      {children}
    </StudentDataContext.Provider>
  );
};

export default StudentDataProvider;
