import React from 'react'
import girl from './Mask Group-2.png'
import inspi1 from './images/inspi1.jpg'


const MidSection = () => {
  return (
    <>
        <div className='bg-[#96bdf163] py-9 px-12'>
          <div>
            <div className='grid sm:grid-cols-2 lg:Zgap-x-4'>
              <div className='  mt-[100px] lg:max-w-[500px] max-w-[300px]   lg:ml-[250px] '>
                <h1 className='font-bold text-2xl lg:text-5xl lg:text-center  pb-3'>Beautify Your Wardrobe</h1>
                <p className=' text-[15px] lg:text-xl py-6'>Do elumed tempor jdjjdl rioe0f irigkwsoy udhgjsh hhsbrhs incidudent et labore et</p>
                <button className='bg-[#253241] lg:mx-[25%] text-[#fff] font-medium rounded-[30px] h-[7vh] w-[150px]'>Learn More</button>
              </div>
              <div className='hidden  md:block relative w-[250px] lg:w-[400px]'>
                <img className=' rounded-lg z-30 h-[300px] w-[210px] lg:w-[250px] lg:h-[400px] lg:ml-[250px]' src={inspi1} alt="" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MidSection;