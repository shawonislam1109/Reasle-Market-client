import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNav.css'
const DashboardNav = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 w-2/3 my-16 mx-auto'>
            <div className='w-full text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 text-orange-600 font-bold   text-center h-28 backgroundDas1 '>
                <Link to='/dashboard/addToCart'> My Oder </Link>
            </div>

            <div className='w-full  text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 text-orange-600 font-bold   text-center h-28 backgroundDas2 '>
                <Link to='/dashboard/allUser'>All User</Link>
            </div>

            <div className='w-full  text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 text-orange-600 font-bold  text-center h-28 backgroundDas3 '>
                <Link to='/dashboard/admin'>Admin</Link>
            </div>
            <div className='w-full  text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 text-orange-600 font-bold  text-center h-28 backgroundDas4 '>
                <Link to='/dashboard/addProduct'>Add Product</Link>
            </div>
            <div className='w-full  text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 text-orange-600 font-bold  text-center h-28 backgroundDas5 '>
                <Link to='/dashboard/addProduct'>My Add product</Link>
            </div>
        </div>
    );
};

export default DashboardNav;