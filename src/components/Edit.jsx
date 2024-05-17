import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  const changehandler = (e) => {
    console.log(e.target.name, e.target.name);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  //   console.log(product);

  const Editproducthandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 3 ||
      product.image.trim().length < 3 ||
      product.category.trim().length < 2 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 3
    ) {
      alert("every field must have atleast 3 charecters");
      return;
    }
    const product = {
      //   id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    const productIndex = products.findIndex((p) => p.id == id);
    const copydata = [...products];
    copydata[productIndex] = { ...products[productIndex], ...product };
    setproducts(copydata);
    // console.log(products);
    localStorage.setItem("products", JSON.stringify(copydata));
    navigate(-1);
  };

  return (
    <form
      action=""
      onSubmit={Editproducthandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="mb-5 w-1/2 text-3xl text-center font-semibold">
        Edit Products
      </h1>
      <input
        type="url"
        placeholder="ImageLink."
        name="image"
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={changehandler}
        value={product && product.image}
      />
      <input
        type="text"
        name="title"
        placeholder="Title."
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={changehandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex gap-3">
        <input
          type="text"
          name="category"
          placeholder="Category."
          className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
          onChange={changehandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="Price."
          name="price"
          className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
          onChange={changehandler}
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={changehandler}
        name="description"
        placeholder="Enter Product Description"
        value={product && product.description}
        rows="10"
      ></textarea>
      <button className="p-3  border-2 border-blue-300 rounded-lg mb-3">
        Edit Product
      </button>
    </form>
  );
}

export default Edit;
