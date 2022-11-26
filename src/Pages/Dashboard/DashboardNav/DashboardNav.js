import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNav.css'
const DashboardNav = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 w-2/3 my-16 mx-auto'>
            <div className='w-full text-red-600  text-2xl lg:text-3xl pt-10 hover:text-5xl duration-200 hover:text-orange-600 font-bold   text-center h-28 backgroundDas1 '>
                <Link to='/product/dashboard'> My Oder </Link>
            </div>

            <div className='w-full text-red-600 text-2xl lg:text-3xl pt-10 hover:text-5xl duration-200 hover:text-orange-600 font-bold   text-center h-28 backgroundDas2 '>
                <Link to='/product/dashboard/allUser'>All User</Link>
            </div>

            <div className='w-full text-red-600 text-2xl lg:text-3xl pt-10 hover:text-5xl duration-200 hover:text-orange-600 font-bold  text-center h-28 backgroundDas3 '>
                <Link to='/dashboard/admin'>Admin</Link>
            </div>
            <div className='w-full text-red-600 text-2xl lg:text-3xl pt-10 hover:text-5xl duration-200 hover:text-orange-600 font-bold  text-center h-28 backgroundDas4 '>
                <Link to='/product/dashboard/addProduct'>Add Product</Link>
            </div>
            <div className='w-full text-red-600 text-2xl lg:text-3xl pt-10 hover:text-5xl duration-200 hover:text-orange-600 font-bold  text-center h-28 backgroundDas5 '>
                <Link to='/dashboard/admin'>My Add product</Link>
            </div>
        </div>
    );
};

export default DashboardNav;