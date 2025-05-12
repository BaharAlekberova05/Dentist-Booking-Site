import React from "react";
import DateContent from "./DateContent";
import Sidebar from "./Sidebar";

const Date = () => {
  return (
    <div className="flex flex-col md:flex-row h-dvh">
      <Sidebar />
      <DateContent />
    </div>
  );
};

export default Date;
