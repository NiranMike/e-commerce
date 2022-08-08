import React from 'react'
import inspi2 from './images/inspi2.jpg'
import inspi3 from './images/inspi3.jpg'
import inspi8 from './images/v4.jpg'
import inspi9 from './images/v3.jpg'

import inspi5 from './images/inspi5.jpg'
import inspi6 from './images/inspi6.jpg'

const Inspiration = () => {
  return (
    <div className='bg-white p-12 '>
        <h1 className='  w-[200px]  mx-auto text-lg font-semibold'>Inspiration Collection</h1>
        <p className=' my-3  sm:w-[400px] text-center w-[300px] mx-auto '>Here are some our our collections of sneaker shoes</p>
        <div className=' mx-[20%] md:mx-auto grid md:grid-cols-2 lg:grid-cols-3'>
          <img src={inspi2} className=" ease-in-out hover:transition-transform hover:scale-105 duration-500 rounded-lg w-[400px] p-5" alt="" />
          <img src={inspi3} className=" ease-in-out hover:transition-transform hover:scale-105 duration-500 rounded-lg w-[400px] p-5" alt="" />
          <img src={inspi5} className=" ease-in-out hover:transition-transform hover:scale-105 duration-500 rounded-lg w-[400px] p-5" alt="" />
          <img src={inspi6} className=" ease-in-out hover:transition-transform hover:scale-105 duration-500 rounded-lg w-[400px] p-5" alt="" />
          <img src={inspi8} className=" ease-in-out hover:transition-transform hover:scale-105 duration-500 rounded-lg w-[400px] p-5" alt="" />
          <img src={inspi9} className=" ease-in-out hover:transition-transform hover:scale-105 duration-500 rounded-lg w-[400px] p-5" alt="" />


        </div>
    </div>
  )
}

export default Inspiration