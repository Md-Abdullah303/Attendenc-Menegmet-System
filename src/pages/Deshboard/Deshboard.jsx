import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { StudentDataContext } from "../../context/StudentDataProvider/StudentDataContext";

const Deshboard = () => {

    const {timelineData, studentsData} = useContext(StudentDataContext);

  const data = [
    { name: "Present", value: timelineData.length, fill: "#0088FE" },
    { name: "Absent", value: studentsData.length - timelineData.length, fill: "#00C49F" },
  ];

  return (
    <div className="w-[90%] sm:container mx-auto py-20">
        <h1 className="text-xl sm:text-3xl font-bold text-green-950">Show Presents count: </h1>
      <div className="flex justify-center py-10 flex-col items-center">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
          />
          <Tooltip></Tooltip>
          <Legend></Legend>
        </PieChart>
      </div>
    </div>
  );
};

export default Deshboard;
