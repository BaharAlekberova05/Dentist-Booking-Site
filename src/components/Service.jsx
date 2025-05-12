import React from "react";
import ServiceContent from "./ServiceContent";
import Sidebar from "./Sidebar";

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row h-dvh">
      <Sidebar />
      <ServiceContent />
    </div>
  );
};

export default Service;
