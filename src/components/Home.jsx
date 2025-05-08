import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

const Home = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div className="container">
      <h1 className="text-red-500">{value}</h1>
    </div>
  );
};

export default Home;
