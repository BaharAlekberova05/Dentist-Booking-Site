import React from "react";
import ConfirmationContent from "./ConfirmationContent";
import Sidebar from "./Sidebar";

const Confirmation = () => {
  return (
    <div className="flex items-center h-full">
      <Sidebar />
      <ConfirmationContent />
    </div>
  );
};

export default Confirmation;
