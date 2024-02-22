import React from 'react'
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

import { formatearDinero } from '../helpers'

const Producto = ({producto}) => {
  const {handleSetProducto, handleChangeModal}= useQuiosco()

    const {name, image, price}= producto
  
    return (
    <div className='border p-3'>
      <Image 
        src={`/assets/img/${image}.jpg`} 
        alt={`imagen platillo ${name}`} 
        width={400}
        height={500}
        />

        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>
                    {formatearDinero(price)}
            </p>
            <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
            onClick={() => {
              handleChangeModal();
              handleSetProducto(producto);
            }}
            >
              Agregar </button>
        </div>

    </div>
  );
}

export default Producto
