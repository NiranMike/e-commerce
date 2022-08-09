import React from 'react'
import openMenu from '/Users/olani/Desktop/personalwork/NewWeb/src/menu_50px.png'
import close from '/Users/olani/Desktop/personalwork/NewWeb/src/multiply_26px.png'
import shopping from '/Users/olani/Desktop/personalwork/NewWeb/src/images/shopping.png'
import s1 from '/Users/olani/Desktop/personalwork/NewWeb/src/images/s1.jpg'
import s2 from '/Users/olani/Desktop/personalwork/NewWeb/src/images/s2.jpg'
import s3 from '/Users/olani/Desktop/personalwork/NewWeb/src/images/s3.jpg'
import s4 from '/Users/olani/Desktop/personalwork/NewWeb/src/images/s4.jpg'
import s5 from '/Users/olani/Desktop/personalwork/NewWeb/src/images/s5.jpg'
import { useState } from 'react'
const Explore = () => {

    const [menu, setMenu] = useState(true);
    const menuToggle = () =>{
      setMenu(!menu)
    }

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       "access-control-allow-credentials": "true",
  // "access-control-allow-origin": "*",
  // "content-security-policy": "default-src 'none'",
  // "content-type": "text/html; charset=UTF-8",
  // "date": "Mon, 08 Aug 2022 07:49:54 GMT",
  // "location": "/api/sneaker/NiranMike/",
  // "server": "RapidAPI-1.2.8",
  // "via": "1.1 vegur",
  // "x-auth": "zanELgL.0imfnc8m",
  // "x-content-type-options": "nosniff",
  // "x-powered-by": "Express",
  // "x-rapidapi-region": "AWS - eu-central-1",
  // "x-rapidapi-version": "1.2.8"
  //     }
  //   };
    
  //   fetch('/api/sneaker/NiranMike/')
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));



  return (
    <>
      <div className='top--nav bg-[#fffefe] backdrop-blur-md h-12 flex items-center justify-around'>
      <h1 className='font-bold text-[rgb(69,109,155)] text-[30px] cursor-default'>Sneakers</h1>
      <ul className='hidden md:flex justify-around items-center'>
        <li className='mx-3 hover:cursor-pointer text-[#3b5068] font-semibold hover:text-[#e39236]'><h1>Home</h1></li>
        <li className='mx-3 hover:cursor-pointer text-[#3b5068] font-semibold hover:text-[#e39236]'><p>Contacts</p></li>
        <li className='mx-3 hover:cursor-pointer text-[#3b5068] font-semibold hover:text-[#e39236]'><p>Sign Up</p></li>
      </ul> 
      <div className='md:hidden flex justify-around items-center'>
        <img src={shopping} alt="" />
        <img src="" alt="" />
        <div onClick={menuToggle} className=' md:hidden pl-[35px]'>
        {menu ? <img className='w-6' src={openMenu} alt='' /> : <img src={close} className='w-6' alt='' />}
      </div>
      </div>
      
    </div>
    <div className={!menu ? " hover:text-[#000] z-[4] side--nav fixed top-0 left-0 w-[210px] h-full backdrop-blur-lg bg-[#96bdf196] ease-in-out duration-700":"fixed z-[4] top-0 bottom-0 left-[-100%] ease-in-out duration-700"}>
      <h1 className='my-1 font-bold text-[30px] mb-9 text-[rgb(35,72,114)] '>Sneakers</h1>
      <ul className='text-[20px] text-[#fefefe] '>
        <li className='mb-6 border-b hover:text-[#000]  hover:bg-[#5881af]  h-9 hover:cursor-pointer'>Cart</li>
        <li className='mb-6 border-b hover:text-[#000]  hover:bg-[#5881af]  h-9 hover:cursor-pointer'>Shop List</li>
        <li className='mb-6 border-b hover:text-[#000]  hover:bg-[#5881af]  h-9 hover:cursor-pointer'>Login</li>
      </ul>
    </div>
    <div className='advert bg-[#f7f5f5]  h-[70px] '>
      <h1 className='text-center pt-5'>Members get free shopping for 30 days return. <span className='hover:underline hover:text-[#5881af] cursor-pointer'>Join us</span>.<span className='hover:text-[#5881af] hover:underline hover:cursor-pointer'>Learn More</span></h1>
    </div>
    <hr className='mb-12' />
    <section className='bg-[#ffffff] gap-[0px]  card--list grid md:grid-cols-3 grid-cols-2'>
      <div className='mb-[70px] rounded-lg bg-[#ebebeb9d] w-[200px] md:w-[250px] lg:w-[300px] mx-auto relative'>
        <img src={s3} className="w-[300px] " alt="" />
        <div className="ml-2">
            <h1 className='font-bold pt-3'>Nike Air Max 270</h1>
          <h2>Men's Shoe</h2>
          <h3>Little kids Shoe</h3>
          <h4>$250.75</h4>
        </div>
        
      </div>
      <div className='mb-[70px] bg-[#ebebeb9d] rounded-lg w-[200px] md:w-[250px] lg:w-[300px] mx-auto relative'>
        <img src={s5} className="w-[300px] " alt="" />
        <div className="ml-2">
          <h1 className='font-bold pt-3 mb-1'>Nike Air Max 270</h1>
          <h2 className=''>Men's Shoe</h2>
          <h3>Little kids Shoe</h3>
          <h4>$250.75</h4>
        </div>
    </div>

      <div className='mb-[70px] rounded-lg bg-[#ebebeb9d] w-[200px] md:w-[250px] lg:w-[300px] mx-auto relative'>
        <img src={s4} className="w-[300px]" alt="" />
        <div className="ml-2">
          <h1 className='font-bold pt-3 mb-1'>Nike Air Max 270</h1>
          <h2 className=''>Men's Shoe</h2>
          <h3>Little kids Shoe</h3>
          <h4>$250.75</h4>
        </div>
        
      </div>

      <div className='mb-[70px] rounded-lg bg-[#ebebeb9d] w-[200px] md:w-[250px] lg:w-[300px] mx-auto relative'>
        <img src={s4} className="w-[300px]" alt="" />
        <div className="ml-2">
          <h1 className='font-bold pt-3 mb-1'>Nike Air Max 270</h1>
          <h2 className=''>Men's Shoe</h2>
          <h3>Little kids Shoe</h3>
          <h4>$250.75</h4>
        </div>
        
      </div>

      <div className='mb-[70px] rounded-lg bg-[#ebebeb9d] w-[200px] md:w-[250px] lg:w-[300px] mx-auto relative'>
        <img src={s4} className="w-[300px]" alt="" />
        <div className="ml-2">
          <h1 className='font-bold pt-3 mb-1'>Nike Air Max 270</h1>
          <h2 className=''>Men's Shoe</h2>
          <h3>Little kids Shoe</h3>
          <h4>$250.75</h4>
        </div>
        
      </div>

      <div className='mb-[70px] rounded-lg bg-[#ebebeb9d] w-[200px] md:w-[250px] lg:w-[300px] mx-auto relative'>
        <img src={s4} className="w-[300px]" alt="" />
        <div className="ml-2">
          <h1 className='font-bold pt-3 mb-1'>Nike Air Max 270</h1>
          <h2 className=''>Men's Shoe</h2>
          <h3>Little kids Shoe</h3>
          <h4>$250.75</h4>
        </div>
        
      </div>
    </section>
    </>
  );
}

export default Explore