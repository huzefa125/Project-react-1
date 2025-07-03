import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../util/Context";
import Loading from "./Loading";
import axios from "axios";

function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);
  const [filteredproduct, setfilter] = useState(products);

  const params = new URLSearchParams(search);
  const category = params.get("category");

  const getproductcatagory = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setfilter(data);
    } catch (error) {
      console.log(error);
      setfilter([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      getproductcatagory();
    } else {
      setfilter(products);
    }
  }, [category, products]);

  if (loading) return <Loading />;

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="w-[85%] p-5 flex flex-wrap overflow-y-auto gap-15">
        {filteredproduct && filteredproduct.length > 0 ? (
          filteredproduct.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="w-[20%] border shadow rounded p-3 h-[50vh] flex flex-col items-center justify-center"
            >
              <div
                className="w-full h-50 bg-cover object-cover bg-center rounded transition-transform hover:scale-105"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="mt-3 text-center font-medium hover:text-blue-400">
                {p.title}
              </h1>
            </Link>
          ))
        ) : (
          <div className="text-center w-full">No products found.</div>
        )}
      </div>
    </div>
  );
}

export default Home;
