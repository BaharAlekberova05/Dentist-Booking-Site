import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";
import Swal from "sweetalert2";

const ConfirmationContent = () => {
  const navigate = useNavigate();
  const {
    userData,
    setIsStaffOk,
    setIsServiceOk,
    setIsDateOk,
    setIsConfirmationOk,
  } = useContext(MyContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      Swal.fire({
        title: "Success!",
        text: "Your booking is complete!",
        icon: "success",
        confirmButtonText: "Ok",
      });

      userData.user_firstName = formData.firstName;
      userData.user_lastName = formData.lastName;
      userData.user_email = formData.email;
      userData.user_phone = formData.phone;

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });

      setIsConfirmationOk(true);
      console.log(userData);
      navigate("/");

      setIsStaffOk(false);
      setIsServiceOk(false);
      setIsDateOk(false);
      setIsConfirmationOk(false);
    }
  };

  return (
    <div className="flex-3 flex flex-col justify-between py-6 px-8 bg-(--main-bg)">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Select Service</h3>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
      >
        <div className="flex flex-col space-y-2">
          <span className="font-semibold">First name</span>
          <input
            className={`border ${
              errors.firstName ? "border-red-500" : "border-gray-500"
            } rounded-md px-6 py-3 focus:outline-(--custom-color) focus:ring-2 placeholder:text-sm placeholder:text-neutral-500`}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">{errors.firstName}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Last name</span>
          <input
            className={`border ${
              errors.lastName ? "border-red-500" : "border-gray-500"
            } rounded-md px-6 py-3 focus:outline-(--custom-color) focus:ring-2 placeholder:text-sm placeholder:text-neutral-500`}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">{errors.lastName}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Email</span>
          <input
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-500"
            } rounded-md px-6 py-3 focus:outline-(--custom-color) focus:ring-2 placeholder:text-sm placeholder:text-neutral-500`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold">Phone</span>
          <input
            className={`border ${
              errors.phone ? "border-red-500" : "border-gray-500"
            } rounded-md px-6 py-3 focus:outline-(--custom-color) focus:ring-2 placeholder:text-sm placeholder:text-neutral-500`}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col space-y-3 bg-white px-8 py-6 mt-4 md:mt-0">
          <span className="font-semibold text-lg">Notes:</span>

          <div>
            <p className="font-medium">
              Staff:{" "}
              <span className="text-neutral-500">{userData.staff_name}</span>
            </p>
            <p className="font-medium">
              Service:{" "}
              <span className="text-neutral-500">{userData.service_name}</span>
            </p>
            <p className="font-medium">
              Date/Time:{" "}
              <span className="text-neutral-500">
                {userData.service_date} /
              </span>{" "}
              <span className="text-neutral-500">{userData.service_time}</span>
            </p>
            <p className="font-medium">
              Price:{" "}
              <span className="text-neutral-500">
                {userData.service_price}$
              </span>
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 flex items-center justify-between">
          <button
            type="button"
            className="uppercase font-semibold cursor-pointer mt-5"
          >
            <Link to="/date">Back</Link>
          </button>

          <button
            type="submit"
            className="bg-(--custom-color) text-white px-4 py-2 uppercase font-semibold cursor-pointer mt-5"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationContent;
