import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../util/Context";
import Loading from "./Loading";

function Home() {
  const [product] = useContext(ProductContext);
  console.log(product);

  return (
    product ? (
      <div className="flex h-screen w-screen overflow-hidden">
        <Navbar />

        <div className="w-[85%] p-5 flex flex-wrap overflow-y-auto gap-15">
          {product.map((p,i)=>(
               <Link
            to={`/details/${p.id}`}
            className="w-[20%]  border shadow rounded p-3 h-[50vh] flex flex-col items-center justify-center"
          >
            <div
              className="w-full h-50 bg-cover object-cover bg-center rounded transition-transform hover:scale-105"
              style={{
                backgroundImage:
                 `url(${p.image})`,
              }}
            ></div>
            <h1 className="mt-3 text-center font-medium hover:text-blue-400">
             `${p.title}`
            </h1>
          </Link>
          ))}
         
        </div>
      </div>
    ) : (
      <Loading />
    )
  );
}

export default Home;
