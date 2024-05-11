import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  // we'llget all the categories, but they are repeted
  distinct_category = [...new Set(distinct_category)];
  // to make it distinct category array, we've used set. it is an inbuilt js class stores unique elements.
  console.log(distinct_category);

  return (
    <nav className="w-[15%] h-full bg-zinc-200 flex flex-col items-center pt-5">
      <a
        className="p-3 border border-1 border-blue-300 rounded-lg mb-3"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-4 w-[80%] font-semibold">Category</h1>
      <div className=" w-[80%]">
        {distinct_category.map((item, index) => (
          <Link
            to={`/?category=${item}`}
            key={index}
            className="flex items-center gap-2 mb-2"
          >
            <span className="rounded-full bg-blue-300 w-[15px] h-[15px]"></span>
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
