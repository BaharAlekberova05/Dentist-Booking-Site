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
  });

  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      {children}
    </MyContext.Provider>
  );
};
