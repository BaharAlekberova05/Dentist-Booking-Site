import React from "react";
import ServiceContent from "./ServiceContent";
import Sidebar from "./Sidebar";

const Service = () => {
  return (
    <div className="flex items-center h-full">
      <Sidebar />
      <ServiceContent />
    </div>
  );
};

export default Service;
