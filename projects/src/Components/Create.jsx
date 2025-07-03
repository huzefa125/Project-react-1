import React, { useContext, useState } from 'react';
import { ProductContext } from '../util/Context';
import { nanoid } from 'nanoid';
import { Navigate, useNavigate } from 'react-router-dom';

function Create() {
  const [product, setProduct] = useContext(ProductContext);
  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const addProductHandler = (e) => {
    e.preventDefault();
    console.log("submitted");

    const newProduct = {
      id: nanoid(),
      title,
      image,
      price,
      description,
      category,
    };

    
    setProduct([...product, newProduct]);
    navigate("/")
   
    setTitle("");
    setImage("");
    setPrice("");
    setDescription("");
    setCategory("");
  };

  return (
    <div>
      <form onSubmit={addProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='text-3xl mb-5 w-1/2'>Add New Product</h1>

        <input
          type="url"
          placeholder="Image Link"
          className='bg-zinc-100 p-3 w-1/2 text-2xl rounded mb-5'
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <input
          type="text"
          placeholder="Title"
          className='bg-zinc-100 p-3 w-1/2 text-2xl rounded mb-5'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <div className='justify-between w-1/2 flex gap-x-4'>
          <input
            type="text"
            placeholder="Price"
            className='bg-zinc-100 p-3 w-1/2 text-2xl rounded mb-5'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            type="text"
            placeholder="Category"
            className='bg-zinc-100 p-3 w-1/2 text-2xl rounded mb-5'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        <textarea
          rows="10"
          placeholder="Enter Product Description"
          className='bg-zinc-100 p-3 w-1/2 h-1/2 text-xl rounded mb-5'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <input
          type="submit"
          value="Submit"
          className="py-2 px-5 border rounded border-blue-200 text-white bg-blue-400 text-2xl"
        />
      </form>
    </div>
  );
}

export default Create;
