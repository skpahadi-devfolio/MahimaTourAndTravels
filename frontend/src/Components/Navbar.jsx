import React from 'react'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div className='relative z-50 flex justify-between items-center bg-gradient-to-r from-purple-950 to-violet-950 p-6'>
        <NavLink className='logo text-3xl font-bold text-white' to={"/"}>MAHIMA</NavLink>

      {/* Mobile Hamburger */}
      <div className="mobile-hamburger md:hidden text-3xl" onClick={()=>{setopenMenu(!openMenu)}}>
        {openMenu?<FaXmark/>:<FaBars/>}
      </div>
      <nav className='hidden md:flex md:justify-end md:items-center gap-10'>
        <NavLink className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/"}>Home</NavLink>
        <NavLink className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/about"}>About</NavLink>
        <NavLink className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/services"}>Services</NavLink>
        <NavLink className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/login"}>Login</NavLink>
        <NavLink className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/signup"}>Signup</NavLink>
      </nav>
      {/* for mobile */}
      {openMenu && (
        <div className='md:hidden absolute top-full right-7 w-70 mx-auto h-auto bg-gradient-to-r from-slate-800 to-pink-900 flex flex-col justify-center items-center gap-6 mt-2 p-6 shadow shadow-pink-500 rounded-md'>
        <NavLink onClick={()=>{setopenMenu(!openMenu)}} className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/"}>Home</NavLink>
        <NavLink onClick={()=>{setopenMenu(!openMenu)}} className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/about"}>About</NavLink>
        <NavLink onClick={()=>{setopenMenu(!openMenu)}} className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/services"}>Services</NavLink>
        <NavLink onClick={()=>{setopenMenu(!openMenu)}} className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/login"}>Login</NavLink>
        <NavLink onClick={()=>{setopenMenu(!openMenu)}} className={"hover:bg-gradient-to-r from-pink-800 to-violet-900 hover:p-2 hover:rounded-xl transition-all hover:duration-700 hover:ease-in-out"} to={"/signup"}>Signup</NavLink>
        </div>
      )}

    </div>
  )
}

export default Navbar
