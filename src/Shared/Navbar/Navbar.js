import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from './mainLogo-removebg-preview.png'
const Navbar = () => {
    const { user, LogOUt } = useContext(AuthContext)

    const singOut = () => {
        LogOUt()
            .then()
            .catch(error => console.log(error))
    }
    const menuItem = <React.Fragment>
        <li className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  border-0 rounded-md mr-2 p-1 px-2  text-white'><Link to='/'>Home</Link></li>
        <li className=' hover:bg-violet-600 focus:bg-violet-700 p-1 px-2 focus:outline-none focus:ring focus:ring-violet-300  border-0 rounded-md mr-1  hover:text-white'><Link >My Ads</Link></li>
        <li className=' hover:bg-violet-600 focus:bg-violet-700 p-1 px-2 focus:outline-none focus:ring focus:ring-violet-300  border-0 rounded-md mr-1  hover:text-white'><Link to='/dashboard' >Dashboard</Link></li>
        <li className=' hover:bg-violet-600 focus:bg-violet-700 p-1 px-2 focus:outline-none focus:ring focus:ring-violet-300  border-0 rounded-md mr-1  hover:text-white'><Link >Blog</Link></li>
        <li className=' hover:bg-violet-600  p-1 px-2  focus:text-blue-500  border-0 rounded-md mr-1  hover:text-white'><Link to='/product' >Product</Link></li>
        {user?.uid ? <>
            <li onClick={singOut} className=' hover:bg-violet-600 p-1 px-2 focus:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  border-0 rounded-md mr-1 hover:text-white'><Link to='/login' >Logout</Link></li>
        </>
            :
            <>
                <li className=' hover:bg-violet-600 p-1 px-2 focus:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-0 rounded-md mr- hover:text-white'><Link to='/login' >Login</Link></li>
            </>
        }

    </React.Fragment>
    return (
        <div className="navbar lg:w-11/12 mx-auto  mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content  shadow bg-base-100 rounded-box w-52 font-bold">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <Link className=" flex justify-center items-center normal-case text-xl">
                    <img className='lg:w-32 md:24 w-16' src={logo} alt="" />
                    <span className='text-violet-500  md:text-2xl md:font-bold mr-2'>Niben</span>
                    <span className='flex justify-center items-center text-orange-500 md:text-3xl  md:font-bold'>R <small className='text-black md:font-medium ml-3'>Diben</small></span>
                </Link>

            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className=" flex justify-center items-center font-bold">
                    {
                        menuItem
                    }
                </ul>
            </div>
        </div>
    );
};


export default Navbar;