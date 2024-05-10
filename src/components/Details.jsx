import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {
  const [product, setproduct] = useState(null);
  const { id } = useParams();

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, []);

  return product ? (
    <div className="w-[80%] h-full m-auto py-[10%] px-10 flex items-center lg:px-[10vw]">
      <img
        className="w-[50%] h-[95%] object-contain mr-1"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%] h-[80%] flex flex-col gap-5 lg:h-[95%]">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <h2 className="text-zinc-700">{product.category}</h2>
        <h2 className="text-green-500 ">{product.price}</h2>
        <p>{product.description}</p>
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
  ) : (
    <Loading />
  );
}

export default Details;
