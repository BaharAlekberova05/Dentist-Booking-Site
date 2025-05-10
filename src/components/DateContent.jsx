import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";

const DateContent = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { times, userData, setUserData, setIsDateOk } = useContext(MyContext);

  console.log(userData);

  useEffect(() => {
    setUserData((prevData) => ({
      ...prevData,
      service_date: selectedDate,
      service_time: selectedTime,
    }));
  }, [selectedDate, selectedTime]);

  const checkDateRequirements = () => {
    if ((selectedDate !== null) & (selectedTime !== null)) {
      navigate("/confirmation");
      setIsDateOk(true);
    } else {
      alert("Please select a date/time!");
    }
  };

  return (
    <div className="flex-3 flex flex-col justify-between py-6 px-8 bg-(--main-bg)">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Select Date & Time
        </h3>

        <div className="flex flex-col space-y-8">
          <div className="flex-1/2">
            <p className="text-center text-2xl font-medium mb-6">Date</p>

            <input
              type="date"
              className="border rounded-md w-full px-4 py-1"
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <div className="flex-1/2">
            <p className="text-center text-2xl font-medium mb-6">Time</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {times.map((time, i) => (
                <div
                  key={i}
                  className="shadow-2xl text-xl px-5 py-2 bg-gray-300 cursor-pointer hover:bg-(--custom-color) hover:text-white transition-all duration-300"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="uppercase font-semibold cursor-pointer mt-5">
          <Link to="/service">Back</Link>
        </button>

        <button
          onClick={checkDateRequirements}
          className="bg-(--custom-color) text-white px-4 py-2 uppercase font-semibold cursor-pointer mt-5"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DateContent;
