import React from "react";
import { useContext } from "react";
import { ProductContext } from "../util/Context";
import { Link } from "react-router-dom";

function Navbar() {
  const [products] = useContext(ProductContext);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5 border-r border-gray-200">
      <Link
        to="/create"
        className="py-2 px-5 mb-4 border rounded border-blue-500 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
      >
        + Add Product
      </Link>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-3 font-medium w-[80%]">Category Filter</h1>
      <div className="w-[80%] text-sm space-y-2">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-100 rounded-full"></span>
          All
        </Link>
        {categories.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${encodeURIComponent(c)}`}
            className="flex items-center gap-2"
          >
            <span className="w-4 h-4 bg-blue-100 rounded-full"></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
