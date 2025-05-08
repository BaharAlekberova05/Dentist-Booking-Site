import React, { useState } from "react";
import { Link } from "react-router-dom";

const StaffContent = () => {
  const staffs = [
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
      name: "Alex Rosetta",
      email: "alexrosette@gmail.com",
    },
    {
      img: "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4=",
      name: "Maria July",
      email: "mariajuly@gmail.com",
    },
    {
      img: "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor.jpg?v=1684314843",
      name: "Robert Brown",
      email: "robertbrown@gmail.com",
    },
  ];
  return (
    <div className="flex-3 flex flex-col justify-between py-6 px-8 bg-(--main-bg)">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Select Staff</h3>

        <div className="flex flex-col space-y-3">
          {staffs.map((staff, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 p-4 bg-white shadow-lg focus:border-(--custom-color)"
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
        <Link to="/service">
          <button className="bg-(--custom-color) text-white px-4 py-2 uppercase font-semibold cursor-pointer mt-5">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StaffContent;
