import React from 'react'
import { urlFor } from "@/Lib/client";

const CartItem = ({image, name, price, quantity}) => {
  return (
    <div className='grid grid-cols-3 rounded-xl shadow-lg my-5 bg-white p-3'>
        <img src={urlFor(image[0])} alt={name} className="cover rounded-xl w-20 h-20 col-span-1 mr-1"/>
        <div className='block col-span-2'>
            <p className='text-base pr-2'>{name} ({quantity} шт.)</p>
            <div className='flex pr-2'>
                <p className='text-red-500 font-semibold'>{price * quantity} руб.</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem