import React, { useState } from "react";

function Create() {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("second");
  return (
    <form
      action=""
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Products.</h1>
      <input
        type="url"
        placeholder="ImageLink."
        className="text-3xl bg-zinc-300 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title."
        className="text-3xl bg-zinc-300 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
    </form>
  );
}

export default Create;
