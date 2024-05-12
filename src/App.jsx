import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="h-screen w-screen flex">
      <Link to="/" className="text-xl text-red-500">
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
// left video at 1:36 minuits on saturday
export default App;
