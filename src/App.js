import React from "react";

import { Routes, Route } from "react-router-dom";

import Portfolio from "./Pages/Portfolio";
import ProjectDetail from "./Pages/ProjectDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default App;
