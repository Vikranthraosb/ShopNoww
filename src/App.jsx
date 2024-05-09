import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="h-screen w-screen bg-red-100 flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Home />} />
      </Routes>
    </div>
  );
}
// left video at 33 minuits
export default App;
