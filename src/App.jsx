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

      <div className="h-full w-[85%] bg-green-200">
        <div className="card p-5 border shadow rounded-lg w-[18%] h-[25vh] flex justify-center items-center">
          <div
            className="w-full h[80%] bg-contain bg-no-repeat"
            style={{
              backgroundImage: "url(https://fakestoreapi.com/products/1)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
