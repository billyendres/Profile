import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
