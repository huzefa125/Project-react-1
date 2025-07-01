import React from 'react'
import { Link } from 'react-router-dom'
function Details() {
  return (
   <>
    <div className='w-[70%] flex justify-center items-center h-full  m-auto py-[10%] px-[5%]'>

        <img className='h-[80%] w-[50%] object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7EC8YE52g6Al8929cCq4I7mELiHPlzwrBQ&s" alt="" />
        <div className='  '>
            <h1 className='text-4xl my-5'>Fjallraven - Foldsack No . 1 Backpack, Fits 15 Laptops</h1>
            <h3 className='text-zinc-500 mb-5'>men's clothing</h3>
            <h2 className='text-red-600'>$ 109.95 </h2>
            <p className='mb-[5%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sunt quo, impedit</p>
            <Link className="py-2 px-5 border rounded border-blue-200 text-blue-300 mr-3">Edit</Link>
            <Link className='py-2 px-5 border rounded border-red-200 text-red-400"'>Delete</Link>
        </div>
    </div>
   </>
  )
}

export default Details
