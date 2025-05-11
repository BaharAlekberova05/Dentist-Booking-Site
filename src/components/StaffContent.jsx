import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";
import Swal from "sweetalert2";

const StaffContent = () => {
  const navigate = useNavigate();
  const [selectedStaff, setSelectedStaff] = useState(null);
  const { setUserData, staffs, setIsStaffOk } = useContext(MyContext);
  const handleStaffSelection = (index, staff_name) => {
    setSelectedStaff(index);
    setUserData((prevData) => ({ ...prevData, staff_name: staff_name }));
  };

  const checkStaffRequirements = () => {
    if (selectedStaff !== null) {
      navigate("/service");
      setIsStaffOk(true);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please, select a staff!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="flex-3 flex flex-col justify-between py-6 px-8 bg-(--main-bg)">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Select Staff</h3>

        <div className="flex flex-col space-y-3">
          {staffs.map((staff, i) => (
            <div
              onClick={() => handleStaffSelection(i, staff.name)}
              key={i}
              className={`flex items-center space-x-3 p-4 bg-white shadow-lg ${
                selectedStaff === i && "border-2 border-(--custom-color)"
              }`}
            >
              <div className="size-14 md:size-18">
                <img
                  src={staff.img}
                  alt="Staff"
                  className="size-full object-cover rounded-full"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold text-sm md:text-base">{staff.name}</p>
                <p className="text-neutral-500 text-xs md:text-sm font-semibold">
                  {staff.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end">
        <button
          onClick={checkStaffRequirements}
          className="bg-(--custom-color) text-white px-4 py-2 uppercase font-semibold cursor-pointer mt-5"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StaffContent;
