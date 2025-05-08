import React from "react";
import Sidebar from "./Sidebar";
import StaffContent from "./StaffContent";

const Staff = () => {
  return (
    <div className="flex items-center h-full">
      <Sidebar />
      <StaffContent />
    </div>
  );
};

export default Staff;
