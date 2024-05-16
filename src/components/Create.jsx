import React, { useState } from "react";

function Create() {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const Addproducthandler = (e) => {
    e.preventDefault();
    const product = {
      title,
      image,
      category,
      price,
      description,
    };
    console.log(product);
  };

  return (
    <form
      action=""
      onSubmit={Addproducthandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="mb-5 w-1/2 text-3xl text-center font-semibold">
        Add New Products
      </h1>
      <input
        type="url"
        placeholder="ImageLink."
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title."
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex gap-3">
        <input
          type="text"
          placeholder="Category."
          className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price."
          className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={(e) => setdescription(e.target.value)}
        placeholder="Enter Product Description"
        value={description}
        rows="10"
      ></textarea>
      <button className="p-3  border-2 border-blue-300 rounded-lg mb-3">
        Add New Product
      </button>
    </form>
  );
}

export default Create;
