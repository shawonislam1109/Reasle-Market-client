import React from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo-removebg-preview.png'
const Navbar = () => {
    const menuItem = <React.Fragment>
        <li className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-1 border-0 rounded-md mr-2  text-white'><Link to='/'>Home</Link></li>
        <li className=' hover:bg-violet-600 focus:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-1 border-0 rounded-md mr-2  hover:text-white'><Link >My Odors</Link></li>
        <li className=' hover:bg-violet-600 focus:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-1 border-0 rounded-md mr-2  hover:text-white'><Link >My Add </Link></li>
        <li className=' hover:bg-violet-600 focus:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-1 border-0 rounded-md mr-2  hover:text-white'><Link >Dashboard</Link></li>
    </React.Fragment>
    return (
        <div className="navbar lg:w-11/12 mx-auto  mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <Link className=" flex justify-center items-center normal-case text-xl">
                    <img className='lg:w-32 md:24 w-16' src={logo} alt="" />
                    <span className='text-violet-500 hidden md:block md:text-2xl md:font-bold mr-2'>Niben</span>
                    <span className='hidden md:block text-orange-500 md:text-3xl  md:font-bold'>R <small className='text-black md:font-medium'>Diben</small></span>
                </Link>
                <Link className='md:hidden'>
                    <span className='text-violet-500 font-medium '>Niben</span>

                    <p className=' text-orange-500 font-bold ml-2'>R <small className='text-black font-medium'>Diben</small></p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ml-10">
                <ul className="menu menu-horizontal p-0  font-bold">
                    {
                        menuItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;