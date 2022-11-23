import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <React.Fragment>
        <li className='bg-indigo-600 p-1 border-0 rounded-md mr-2  text-white'><Link to='/'>Home</Link></li>
        <li className='hover:bg-indigo-600 p-1 rounded-md mr-2  hover:text-white'><Link >My Odors</Link></li>
        <li className='hover:bg-indigo-600 p-1 rounded-md mr-2  hover:text-white'><Link >My Add </Link></li>
        <li className='hover:bg-indigo-600 p-1 rounded-md mr-2  hover:text-white'><Link >Dashboard</Link></li>
    </React.Fragment>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
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