import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";

import "./App.css";

function App() {
  // Check if we're running on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  return (
    <Router basename={isGitHubPages ? "/fitness--website" : ""}>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
