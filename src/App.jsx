import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/MyContext";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
