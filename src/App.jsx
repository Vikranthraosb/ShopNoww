import React from "react";

function App() {
  return (
    <div className="h-screen w-screen bg-red-100 flex">
      <nav className="w-[15%] h-full bg-zinc-200 flex flex-col items-center pt-5">
        <a
          className="p-3 border border-1 border-blue-300 rounded-lg mb-3"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl mb-4 w-[80%] font-semibold">Category</h1>
        <ul className=" w-[80%]">
          <li className="flex items-center gap-2 mb-2">
            <span className="rounded-full bg-blue-300 w-[15px] h-[15px]"></span>
            Cat-1
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="rounded-full bg-green-300 w-[15px] h-[15px]"></span>
            Cat-2
          </li>
          <li className="flex items-center gap-2 mb-2">
            <span className="rounded-full bg-orange-300 w-[15px] h-[15px]"></span>
            Cat-3
          </li>
        </ul>
      </nav>

      <div className="h-full w-[85%] bg-green-100 p-3 pt-5 flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="card p-2 border bg-red-100 shadow rounded-lg w-full md:w-[14%] h-[30vh] flex flex-col justify-center items-center m-2">
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
        </div>
      </div>
    </div>
  );
  // left at
}

export default App;
