import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";

function Nav() {
  const [products] = useContext(ProductContext);
  const distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  // we'llget all the categories, but they are repeted
  distinct_category = [...new set(distinct_category)];
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
  );
}

export default Nav;
