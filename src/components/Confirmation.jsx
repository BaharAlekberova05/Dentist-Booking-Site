import React from "react";
import ConfirmationContent from "./ConfirmationContent";
import Sidebar from "./Sidebar";

const Confirmation = () => {
  return (
    <div className="flex flex-col md:flex-row h-full md:h-screen">
      <Sidebar />
      <ConfirmationContent />
    </div>
  );
};

export default Confirmation;
