import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const productToEdit = products.find((p) => p.id == id);
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [id, products]);

  const editProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 3 ||
      product.image.trim().length < 3 ||
      product.category.trim().length < 2 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 3
    ) {
      alert("Every field must have at least 3 characters");
      return;
    }

    const updatedProducts = products.map((p) =>
      p.id == id ? { ...p, ...product } : p
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate(-1);
  };

  return (
    <form
      onSubmit={editProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="mb-5 w-1/2 text-3xl text-center font-semibold">
        Edit Products
      </h1>
      <input
        type="url"
        placeholder="ImageLink"
        name="image"
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={changeHandler}
        value={product.image}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={changeHandler}
        value={product.title}
      />
      <div className="w-1/2 flex gap-3">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
          onChange={changeHandler}
          value={product.category}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
          onChange={changeHandler}
          value={product.price}
        />
      </div>
      <textarea
        className="text-xl bg-zinc-200 rounded-lg p-2 px-8 w-1/2 mb-3"
        onChange={changeHandler}
        name="description"
        placeholder="Enter Product Description"
        value={product.description}
        rows="10"
      ></textarea>
      <button className="p-3 border-2 border-blue-300 rounded-lg mb-3">
        Edit Product
      </button>
    </form>
  );
}

export default Edit;
