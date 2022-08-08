import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import menu from './menu_50px.png'
import closeMenu from './multiply_26px.png'



const Navbar = () => {
    const [openMenu, setMenu] = useState(true);
    const toggleBar = () =>{
        setMenu(!openMenu);
    }

  return (
    <>
      <div className=' backdrop-blur-md bg-[#fdfdfd98] h-[10vh] z-30 sticky top-0 left-0 right-0 shadow-md flex justify-around items-center'>
        <h1 className=' text-[rgb(35,72,114)] ml-[-50px] font-bold text-[30px]'>Sneakers</h1>
        <div className=''>
          <ul className=' hidden text-[#5881af] sm:flex md:flex font-[500] justify-between w-[300px] '>
            <Link to="/"><li className=' text-[#3b5068] font-semibold hover:cursor-pointer hover:text-[#e48c28]'>Home</li></Link>
            <Link to="/Explore"><li className=' text-[#3b5068] font-semibold hover:cursor-pointer hover:text-[#e48c28]'>Explore</li></Link>
            <Link to="/About"><li className=' text-[#3b5068] font-semibold hover:cursor-pointer hover:text-[#e48c28]'>About</li></Link>
            <Link to="/Login"><li className=' text-[#3b5068] font-semibold hover:cursor-pointer hover:text-[#e48c28]'>Login</li></Link>

            {/* <li className=' text-[#3b5068] font-semibold hover:cursor-pointer hover:text-[#e48c28]'>Home</li>
            <li className='hover:cursor-pointer font-semibold text-[#3b5068] hover:text-[#e48c28]'>Explore</li>
            <li className='hover:cursor-pointer font-semibold text-[#3b5068] hover:text-[#e48c28]'>About</li>
            <li className='hover:cursor-pointer font-semibold text-[#3b5068] hover:text-[#e48c28]'>Login</li> */}
          </ul>
        </div>
        <div className="md:hidden sm:hidden mr-[-50px]" onClick={toggleBar}>
            {openMenu ? <img src={menu} width={"30px"} alt="" />: <img src={closeMenu} width={"30px"} alt="" />}
        </div>
      </div>
      <div className={!openMenu ? 'fixed z-40 left-0 top-0 w-[46%] md:w-[25%] h-full   bg-[#96bdf196] backdrop-blur-lg ease-in-out duration-700 px-0 py-[-40px] md:hidden  ' : ' z-40 fixed top-0 bottom-0 left-[-100%] ease-in-out duration-700'} >
          <h1 className='text-[#5881af] m-0 mx-2 z-40 w-full font-bold text-[30px]'>Sneakers</h1>
          <ul className=' text-[#fff] m-0 mx-0 font-[500] w-[300px] '>
          <Link to="/"><li className=' my-7 hover:cursor-pointer hover:text-[#000000] w-[183px] border-b hover:bg-[#5881af] font-medium h-9 px-2 py-1'>Home</li></Link>
          <Link to="/Explore"><li className=' my-9 hover:cursor-pointer hover:text-[#000000] w-[183px] border-b hover:bg-[#5881af] font-medium h-9 px-2 py-1'>Explore</li></Link>
          <Link to="/About"><li className=' my-9 hover:cursor-pointer hover:text-[#000000] w-[183px] border-b hover:bg-[#5881af] font-medium h-9 px-2 py-1'>About</li></Link>
          <Link to="/Login"><li className=' my-9 hover:cursor-pointer hover:text-[#05070a] w-[183px] border-b hover:bg-[#5881af] font-medium h-9 px-2 py-1'>Login</li></Link>
          </ul>
      </div>
    </>
    
  )
}

export default Navbar
