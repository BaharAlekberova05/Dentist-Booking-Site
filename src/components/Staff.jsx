import React from "react";
import Sidebar from "./Sidebar";
import StaffContent from "./StaffContent";

const Staff = () => {
  return (
    <div className="flex flex-col md:flex-row h-dvh">
      <Sidebar />
      <StaffContent />
    </div>
  );
};

export default Staff;
