import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Details() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line
  }, [id])

  if (loading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (!product) {
    return <div className="text-center py-10 text-red-500">Product not found.</div>
  }

  return (
    <div className='w-[70%] flex justify-center items-center h-full  m-auto py-[10%] px-[5%] '>
      <img className='h-[80%] w-[50%] object-contain mr-10' src={product.image} alt="" />
      <div>
        <h1 className='text-4xl my-5'>{product.title}</h1>
        <h3 className='text-zinc-500 mb-5'>{product.category}</h3>
        <h2 className='text-red-600'>${product.price}</h2>
        <p className='mb-[5%]'>{product.description}</p>
        <Link className="py-2 px-5 border rounded border-blue-200 text-blue-300 mr-3">Edit</Link>
        <Link className='py-2 px-5 border rounded border-red-200 text-red-400"'>Delete</Link>
      </div>
    </div>
  )
}

export default Details
