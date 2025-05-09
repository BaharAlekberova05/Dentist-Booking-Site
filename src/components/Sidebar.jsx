import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";
import { FaCheck } from "react-icons/fa";

const Sidebar = () => {
  const { isStaffOk, isServiceOk, isDateOk, isConfirmationOk } =
    useContext(MyContext);

  const stopNavigate = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 p-8 flex flex-col space-y-6 md:space-y-8 bg-gradient-to-t from-[#efad6b] to-[#f3d3b2]">
      <NavLink to="/" onClick={stopNavigate}>
        {({ isActive }) => (
          <div className="flex items-center space-x-4 md:space-x-6">
            {isStaffOk ? (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold bg-green-400`}
              >
                <FaCheck />
              </div>
            ) : (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                  isActive ? "bg-(--custom-color)" : "bg-gray-400"
                }`}
              >
                1
              </div>
            )}

            <span className="text-(--custom-black) font-medium text-lg md:text-xl">
              Staff
            </span>
          </div>
        )}
      </NavLink>

      <NavLink to="/service" onClick={stopNavigate}>
        {({ isActive }) => (
          <div className="flex items-center space-x-4 md:space-x-6">
            {isServiceOk ? (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold bg-green-400`}
              >
                <FaCheck />
              </div>
            ) : (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                  isActive ? "bg-(--custom-color)" : "bg-gray-400"
                }`}
              >
                2
              </div>
            )}

            <span className="text-(--custom-black) font-medium text-lg md:text-xl">
              Service
            </span>
          </div>
        )}
      </NavLink>

      <NavLink to="/date" onClick={stopNavigate}>
        {({ isActive }) => (
          <div className="flex items-center space-x-4 md:space-x-6">
            {isDateOk ? (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold bg-green-400`}
              >
                <FaCheck />
              </div>
            ) : (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                  isActive ? "bg-(--custom-color)" : "bg-gray-400"
                }`}
              >
                3
              </div>
            )}

            <span className="text-(--custom-black) font-medium text-lg md:text-xl">
              Date & Time
            </span>
          </div>
        )}
      </NavLink>

      <NavLink to="/confirmation" onClick={stopNavigate}>
        {({ isActive }) => (
          <div className="flex items-center space-x-4 md:space-x-6">
            {isConfirmationOk ? (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold bg-green-400`}
              >
                <FaCheck />
              </div>
            ) : (
              <div
                className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                  isActive ? "bg-(--custom-color)" : "bg-gray-400"
                }`}
              >
                4
              </div>
            )}

            <span className="text-(--custom-black) font-medium text-lg md:text-xl">
              Confirmation
            </span>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Sidebar;
