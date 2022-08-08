import React from 'react'

const Login = () => {
  return (
    <div className=' login--bg'>
      <div className='login--btn bg-[#fbfafa94] backdrop-blur-md relative h-screen w-screen'>
      <div className="mx-[20%]  md:w-[370px] h-[60vh] rounded-md sm:mx-[30%] md:mx-[35%] lg:mx-[40%] absolute mt-[20%] sm:mt-[15%] md:mt-[10%] lg:mt-[5%] backdrop-blur-lg  bg-[#79adf083] w-[320px] ">
        <h1 className='text-center'>Login</h1>
        <form action="" className='p-12'>
          <input type="email" placeholder='Email' className='focus:outline-none outline-hidden mb-[70px] bg-transparent md:w-[260px] border-b border-b-[#000]' />
          <input type="password" placeholder='Password' className='mb-7 focus:outline-none bg-transparent border-b md:w-[260px] border-b-[#000]' />
          <button type="submit" className='bg-[#33ae4e] text-[#f9f6f6] w-[100px] h-[7vh] mt-7 mx-[55px] md:mx-[88px] rounded-[30px]'>Confirm</button>
        </form>
      </div>
        
    </div>
    </div>
    
  )
}


export default Login