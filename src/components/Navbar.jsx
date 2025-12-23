// import React, { useState } from 'react';
// import { FaFacebookF, FaBars, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
// const Navbar = () => {
//     const [nav, setNav] = useState(false);

//     const handleNav = () => {
//         setNav(!nav)
//     }
//     return (
//         <div className='w-full top-0 sticky min-h-[50px] flex justify-between items-center abolute z-20 text-white bg-[#5390ec]'>
//             <div className="hidden sm:flex px-4  justify-between ">
//                 <h1 className='ml-10'>
//                     <a href="#hero">HOME</a>
//                 </h1>
//                 <h1 className='ml-10'>
//                     <a href="#gallery">EVENTS</a>
//                 </h1>
//                 <h1 className='ml-10'>
//                     <a href="#deals">DONATE</a>
//                 </h1>
//                 <h1 className='ml-10'>
//                     <a href="#contact">OUR LOCATION</a>
//                 </h1>
//             </div>
//             <div className="flex justify-between">
//                 <FaFacebookF className='mx-4 cursor-pointer' />
//                 <FaTwitter className='mx-4 cursor-pointer' />
//                 <FaGooglePlusG className='mx-4 cursor-pointer' />
//                 <FaInstagram className='mx-4 cursor-pointer' />
//             </div>
//             {/* Hamburger Icons? */}
//             <div onClick={handleNav} className="sm:hidden z-10">
//                 <FaBars size={30} className='mr-4 cursor-pointer' />
//             </div>
//             {/* Mobile Menu */}
//             <div onClick={handleNav} className={nav ? 'truncate overflow-y-hidden md:hidden ease-in-out duration-500 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
//                 <ul className="h-full w-full text-center pt-12">
//                     <li className="text-2xl py-8">
//                         <a href="#hero">HOME</a>
//                     </li>
//                     <li className="text-2xl py-8">
//                         <a href="#gallery">EVENTS</a>
//                     </li>
//                     <li className="text-2xl py-8">
//                         <a href="#deals">DONATE</a>
//                     </li>
//                     <li className="text-2xl py-8">
//                         <a href="#contact">OUR LOCATION</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar

























import React, {useState} from 'react';
import { AiOutlineClose, AiFillTag, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import {BsFillCartFill } from 'react-icons/bs';
import {TbTruckDelivery } from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import { FaWallet } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { HiUser } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='bg-white top-0 sticky z-50 mx-auto flex justify-between items-center p-4'>
        
        {/* Left side */}
        <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu  className='hover:bg-teal-400 p-2 px-2 py-1 hover:text-white  hover:rounded-full' size={40} />
        </div>
        <NavLink to='/'>
        <h1 className='text-[8px] flex sm:text-xl lg:text-4xl px-2 font-bold'>
            E- <span className='font-bold'>MotionX</span>
        </h1>
        </NavLink>
        
        </div>

        {/* Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-full sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder="Search Bikes" />
        </div>
        {/* Cart button */}
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='text-white cursor-pointer bg-green-400  rounded-full p-2'>Delivery</p>
            <p className='p-2 cursor-pointer font-semibold'>Pickup</p>
        </div>
        <button className='text-black hidden md:flex border p-3 px-2 border-teal-400  items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'  /> Cart
        </button>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        {/* Side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={35} className="absolute hover:bg-teal-400 p-2 px-2 py-1 hover:text-white  hover:rounded-full right-4 top-4 cursor-pointer" />
            <NavLink to='/'>
            <h2 className="text-2xl p-4 font-bold">E-MotionX <span className='font-bold'></span></h2>
            </NavLink>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                <NavLink to='/'>
                    <li className='text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style:  italic uppercase font-semibold  border-teal-300 flex'><MdFavorite size={25} className='mr-2' />HomePage</li>
                    </NavLink>
                    <li className='text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style:  italic uppercase font-semibold border-teal-300 flex'><HiUser size={25} className='mr-2' /> Join</li>
                    <li className='text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style:  italic uppercase font-semibold  border-teal-300 flex'><TbTruckDelivery size={25} className='mr-2' /> Orders</li>
                    <NavLink to='/ContactUs'>
                    <li className='text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style:  italic uppercase font-semibold  border-teal-300 flex'><MdFavorite size={25} className='mr-2' /> Contact Us</li>
                    </NavLink>
                    {/* <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Hero</NavLink> */}
                    <NavLink to='/Payment'>
                    <li className='text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style:  italic uppercase font-semibold  border-teal-300 flex'><FaWallet size={25} className='mr-2' /> Payment</li>
                    </NavLink>
                    <NavLink to='/AboutUs'>
                    <li className='text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style:  italic uppercase font-semibold  border-teal-300 flex'><MdHelp size={25} className='mr-2' /> About Us</li>
                    </NavLink>
                    <li className='text-xl hover:bg-teal-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black font-style:  italic uppercase font-semibold  border-teal-300 flex'><AiFillTag size={25} className='mr-2' /> Services</li>
                    {/* <li className='text-xl hover:bg-orange-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-orange-300 flex'><FaUserFriends size={25} className='mr-2' /> Invite Friends</li> */}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar