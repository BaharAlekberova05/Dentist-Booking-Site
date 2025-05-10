import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  // set your states
  const [userData, setUserData] = useState({
    staff_name: "",
    service_name: "",
    service_price: 0,
    service_date: "",
    service_time: "",
    user_firstName: "",
    user_lastName: "",
    user_email: "",
    user_phone: "",
  });

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

  const services = [
    {
      img: "https://mahimaadentalcare.com/wp-content/uploads/2024/08/Oral-Hygiene.png",
      name: "Oral hygiene",
      duration: "1 hour",
      price: 50.0,
    },
    {
      img: "https://crystallinedental.com/storage/2024/12/dental-implant-on-front-tooth-2.jpg",
      name: "Implants",
      duration: "1 hour 30 minutes",
      price: 120.0,
    },
    {
      img: "https://mymountainmover.com/wp-content/uploads/2024/05/dental-data-analytics.jpg",
      name: "Analysis",
      duration: "2 hour",
      price: 160.0,
    },
  ];

  const times = ["9:00", "10:00", "14:00"];

  const [isStaffOk, setIsStaffOk] = useState(false);
  const [isServiceOk, setIsServiceOk] = useState(false);
  const [isDateOk, setIsDateOk] = useState(false);
  const [isConfirmationOk, setIsConfirmationOk] = useState(false);

  return (
    <MyContext.Provider
      value={{
        userData,
        setUserData,
        staffs,
        services,
        isStaffOk,
        setIsStaffOk,
        isServiceOk,
        setIsServiceOk,
        isDateOk,
        setIsDateOk,
        isConfirmationOk,
        setIsConfirmationOk,
        times,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
