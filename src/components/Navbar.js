import React, { useContext, useState } from 'react'
import { assets } from "../assets/frontend_assets/assets"
import { NavLink, Link } from 'react-router'
import { Shopcontext } from '../context/shopcontext';
function Navbar() {
    const [visible, setvisible] = useState(false);
    const { setshowsearch, getCartCount } = useContext(Shopcontext);
    return (
        <div className='flex justify-between items-center py-5 font-medium'>
            <Link to='/'><img src={assets.logo} className='w-36' alt='logo'></img></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to="/collections" className='flex flex-col items-center gap-1'>
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to="/about" className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setshowsearch(true)} src={assets.search_icon} className='w-5 cursor-pointer'></img>
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer'></img>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'> Logout</p>
                        </div>
                    </div>
                </div>
                <Link to="/cart" className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-8'></img>
                    <p className="absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center 
               bg-red-500 text-white text-[12px] font-bold rounded-full shadow-md">
                        {getCartCount()}
                    </p>

                </Link>
                <img onClick={() => setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'></img>
            </div>
            {/* sidebar for the small screen */}
            <div className={` absolute top-0 right-0 bottom-0 overflow-hidden  bg-white transition-all duration-300 ${visible == true ? 'w-full' : 'w-0'}`}>
                <div className=' flex flex-col  text-gray-700'>
                    <div onClick={() => setvisible(false)} className='flex items-center gap-4 p-3 cursor-pointer '>
                        <img className='h-4 rotate-180 ' src={assets.dropdown_icon}></img>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border'>HOME</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border'>COLLECTIONS</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border'>ABOUT</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar