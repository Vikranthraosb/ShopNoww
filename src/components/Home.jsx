import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Nav />
      <div className="h-full w-[85%] bg-green-100 p-3 pt-5 flex flex-wrap overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="card p-2 border bg-red-100 shadow rounded-lg w-full md:w-[14%] h-[30vh] flex flex-col justify-center items-center m-2"
        >
          <div
            className="mb-1 w-full h-[90%] bg-no-repeat bg-center bg-cover hover:scale-110"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="text-center text-sm sm:text-base hover:text-blue-300">
            Lorem ipsum.
          </h1>
        </Link>
      </div>
    </>
  );
}

export default Home;
