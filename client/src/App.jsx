import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";
import Home from "./pages/Home";
import Preferences from "./pages/Preferences";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import data from "./mockdata/data";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/account" element={<Account />} /> */}
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Router>
    </div>
  );
}
