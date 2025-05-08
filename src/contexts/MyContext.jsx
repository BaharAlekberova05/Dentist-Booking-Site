import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  // set your states
  const [value, setValue] = useState("salam");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
