import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import bannerLogo from './laptop-second-removebg-preview.png'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='w-full background lg:flex justify-center items-center h-96 opacity-90 mb-5'>
            <div className=''>
                <h1 className='text-white pt-10 text-3xl md:text-4xl lg:text-5xl font-bold text-center'>World’s Largest Buy and Sale second hand product</h1>
                <p className='text-white lg:text-3xl md:text-2xl text-xl  text-center pt-3'>This web site is second hand buy and sale</p>
                <div className='flex justify-center '>
                    <div className='text-center hover:bg-orange-700 mt-10 flex w-64 justify-center items-center bg-orange-500 p-4 text-white text-xl rounded-md'>
                        <Link className=''>Let's go in website  </Link>
                        <FaArrowRight className='ml-3'></FaArrowRight>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-60 mt-24  lg:w-full' src={bannerLogo} alt="" />
            </div>
        </div>
    );
};

export default Banner;