import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-1 py-6 px-8 flex flex-col space-y-8 bg-(--custom-bg)">
      <NavLink to="/">
        {({ isActive }) => (
          <div className="flex items-center space-x-6">
            <div
              className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                isActive ? "bg-green-400" : "bg-gray-400"
              }`}
            >
              1
            </div>

            <span className="text-white text-xl">Staff</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/service">
        {({ isActive }) => (
          <div className="flex items-center space-x-6">
            <div
              className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                isActive ? "bg-green-400" : "bg-gray-400"
              }`}
            >
              2
            </div>

            <span className="text-white text-xl">Service</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/date">
        {({ isActive }) => (
          <div className="flex items-center space-x-6">
            <div
              className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                isActive ? "bg-green-400" : "bg-gray-400"
              }`}
            >
              3
            </div>

            <span className="text-white text-xl">Date & Time</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/confirmation">
        {({ isActive }) => (
          <div className="flex items-center space-x-6">
            <div
              className={`rounded-full flex items-center justify-center size-8 text-white font-bold ${
                isActive ? "bg-green-400" : "bg-gray-400"
              }`}
            >
              4
            </div>

            <span className="text-white text-xl">Confirmation</span>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Sidebar;
