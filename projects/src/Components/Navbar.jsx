import React from 'react';

function Navbar() {
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5 border-r border-gray-200">
      <a
        href="/create"
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
      >
        Add new Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-3 font-medium w-[80%]">Category Filter</h1>
      <ul className="w-[80%] text-sm space-y-2">
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-100 rounded-full"></span>
          cat 1
        </li>
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-100 rounded-full"></span>
          cat 2
        </li>
        <li className="flex items-center gap-2">
          <span className="w-4 h-4 bg-yellow-100 rounded-full"></span>
          cat 3
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
