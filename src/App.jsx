import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/MyContext";
import Staff from "./components/Staff";
import Service from "./components/Service";
import Date from "./components/Date";
import Confirmation from "./components/Confirmation";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Staff />} />
          <Route path="/service" element={<Service />} />
          <Route path="/date" element={<Date />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
