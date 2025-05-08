import React from "react";
import DateContent from "./DateContent";
import Sidebar from "./Sidebar";

const Date = () => {
  return (
    <div className="flex items-center h-full">
      <Sidebar />
      <DateContent />
    </div>
  );
};

export default Date;
