import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";

const ServiceContent = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const { setUserData, services, setIsServiceOk } = useContext(MyContext);

  const handleServiceSelection = (index, service_name, service_price) => {
    setSelectedService(index);
    setUserData((prevData) => ({
      ...prevData,
      service_name: service_name,
      service_price: service_price,
    }));
  };

  const checkServiceRequirements = () => {
    if (selectedService !== null) {
      navigate("/date");
      setIsServiceOk(true);
    } else {
      alert("Please select a service!");
    }
  };

  return (
    <div className="flex-3 flex flex-col justify-between py-6 px-8 bg-(--main-bg)">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Select Service
        </h3>

        <div className="flex flex-col space-y-3">
          {services.map((service, i) => (
            <div
              onClick={() =>
                handleServiceSelection(i, service.name, service.price)
              }
              key={i}
              className={`flex items-center space-x-3 p-4 bg-white shadow-lg ${
                selectedService === i && "border-2 border-(--custom-color)"
              }`}
            >
              <div className="size-14 md:size-18 rounded-full">
                <img
                  src={service.img}
                  alt="Staff"
                  className="size-full object-cover rounded-full"
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <p className="font-bold text-sm md:text-base">
                    {service.name}
                  </p>
                  <p className="text-neutral-500 text-xs md:text-sm font-semibold">
                    {service.duration}
                  </p>
                </div>

                <p className="text-xl text-(--custom-color) font-medium">
                  {service.price}$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="uppercase font-semibold cursor-pointer mt-5">
          <Link to="/">Back</Link>
        </button>

        <button
          onClick={checkServiceRequirements}
          className="bg-(--custom-color) text-white px-4 py-2 uppercase font-semibold cursor-pointer mt-5"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceContent;
