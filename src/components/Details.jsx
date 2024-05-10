import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="w-[80%] h-full m-auto py-[10%] px-10 flex items-center lg:px-[10vw]">
      <img
        className="w-[50%] h-[95%] object-contain mr-1"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content w-[50%] h-[80%] flex flex-col gap-5 lg:h-[95%]">
        <h1 className="text-3xl font-semibold">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h2 className="text-zinc-700">Men's clothing</h2>
        <h2 className="text-green-500 ">105.69$</h2>
        <p>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="w-full mt-4">
          <Link className="px-8 p-2 w-8 border border-1 border-blue-400 rounded-lg text-blue-500 m-4">
            Edit
          </Link>
          <Link className="px-5 p-2 w-4 border border-1 border-red-400 rounded-lg  text-red-500 m-4">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
