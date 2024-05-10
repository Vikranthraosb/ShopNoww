import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);
  console.log(products);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] p-5 pt-8 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((item, index) => (
          <Link
            key={index}
            to={`/details/${item.id}`}
            className="card px-2 border shadow rounded-lg w-full md:w-[14%] h-[30vh] flex flex-col justify-center items-center m-2"
          >
            <div
              className="mb-1 w-full h-[60%] bg-no-repeat bg-center bg-cover hover:scale-110 rounded-t-lg"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <h1 className="text-center text-sm sm:text-base text-gray-900 hover:text-blue-500 w-full h-[40%] px-2 overflow-hidden">
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
