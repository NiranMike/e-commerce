import React from 'react'
import delivery from './delivery_32px.png'
import open from './24-7_open_sign_32px.png'
import authentic from './protect_32px.png'

const Hero = () => {
  return (
    <>
      <div className=' relative  flex items-center justify-center min-h-full z-10 main--bg h-screen'>
      <div className='bg-black/30 z-20 absolute inset-0 h-full w-full'></div>
      <div className=" md:ml-[20%] lg:ml-[40%] z-30 bg-[#96bdf196] backdrop-blur-lg max-w-[300px] md:max-w-lg rounded-md p-8 space-y-4 shadow-lg">
        <p>New Arrival</p>
        <h1 className='font-bold text-[30px]'>Discover Our New Collections Of Sneakers</h1>
        <h2>We sell quality products and at an affordable rate</h2>
        <button className='bg-[#253241] text-[#fff] font-medium rounded-[30px] h-[7vh] w-[150px]'>Purchase</button>
      </div>
    </div>
    <div className=' bg-[#96bdf149] grid sm:grid-cols-2 md:grid-cols-3 '>
        <div className='flex py-7 mx-[50px] md:mx-[20px] items-center '>
            <img className=' w-12' src={delivery} width={"40px"} alt="free delivery" />
            <div className='px-[10px]  max-w-[300px] md:w-[500px]'>
                <h1 className='font-bold  md:w-[200px]'>Free Delivery</h1>
                <p className='text-[#253241] font-normal'>We provide free delivery to all our customers</p>
            </div>
        </div>
        <div className='flex py-7 mx-[50px] md:mx-[0px]  items-center '>
            <img className=' w-12' src={authentic} width={"40px"} alt="free delivery" />
            <div className='px-[10px]  max-w-[300px] md:w-[500px]'>
                <h1 className='font-bold md:w-[200px] text-[#253241]'>Free Delivery</h1>
                <p className='text-[#253241] font-normal'>We provide free delivery to all our customers</p>
            </div>
        </div>
        <div className='flex py-7 mx-[50px] md:mx-[0px]  items-center '>
            <img className=' w-12' src={open} width={"40px"} alt="free delivery" />
            <div className='px-[10px]  max-w-[300px] md:w-[500px]'>
                <h1 className='font-bold md:w-[200px] text-[#253241]'>Free Delivery</h1>
                <p className='text-[#253241] font-normal'>We provide free delivery to all our customers</p>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Hero
