import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden"> 
      <Navbar /> 

      <div className="w-[85%] p-5 flex flex-wrap gap-5 overflow-y-auto">
        <Link to="/details/1" className="w-[18%] border shadow rounded p-3 h-[35vh] flex flex-col items-center justify-center">
          
            <div
              className="w-full h-40 bg-cover bg-center rounded transition-transform hover:scale-105"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7EC8YE52g6Al8929cCq4I7mELiHPlzwrBQ&s)",
              }}
            ></div>
            <h1 className="mt-3 text-center font-medium hover:text-blue-400">
              Lorem ipsum dolor
            </h1>
          </Link>
        </div>
      </div>


   
  );
}

export default Home;
