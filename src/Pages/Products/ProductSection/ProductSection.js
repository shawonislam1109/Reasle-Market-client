import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSection.css'
const ProductSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 w-2/3 my-16 mx-auto'>
            <div className='w-full text-white text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 hover:text-orange-600 font-bold   text-center h-28 background1 '>
                <Link to='/product/hp'>HP LAPTOP </Link>
            </div>

            <div className='w-full text-white text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 hover:text-orange-600 font-bold   text-center h-28 background2 '>
                <Link to='/product/dell'>DELL LAPTOP </Link>
            </div>

            <div className='w-full text-white text-2xl lg:text-xl pt-10 hover:text-3xl duration-200 hover:text-orange-600 font-bold  text-center h-28 background3 '>
                <Link to='/product/apple'>APPLE LAPTOP </Link>
            </div>

        </div>
    );
};

export default ProductSection;