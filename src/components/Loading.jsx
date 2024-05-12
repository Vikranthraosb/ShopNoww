import React from "react";

function Loading() {
  return (
    <div className="text-5xl text-center  w-3/4 h-screen m-auto flex flex-col p-8">
      <div className="h-1/2  w-full flex items-center justify-center overflow-hidden">
        <img
          src="src\assets\Images\Dog.png"
          alt="Just a Sec.."
          className="bg-no-repeat bg-center bg-contain max-h-full max-w-full"
        />
      </div>
      <div className="h-1/2  w-full text-5xl font-bold lg:p-10 text-green-800">
        LOADING...
      </div>
    </div>
  );
}

export default Loading;
