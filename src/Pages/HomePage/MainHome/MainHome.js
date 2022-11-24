import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ShortProduct from '../ShortProduct/ShortProduct';
import Terminal from '../Terminal/Terminal';

const MainHome = () => {
    return (
        <div>
            <Banner />
            <div>
                <h1 className='text-center mt-10'><span className='text-3xl lg:text-5xl font-bold text-violet-500'>FEATURE</span> <span className='text-3xl lg:text-5xl font-bold ml-2'>PRODUCT</span></h1>
                <p className='text-center md:text-xl lg:text-3xl mt-3'>Find out & in your product
                    and buy and get bonus and see what's happening</p>
                <ShortProduct />
                <div className='text-center my-5 mb-10 rounded-md'>
                    <Link to='/product/hp' className='px-8 py-5 text-white font-bold rounded-md  bg-violet-600 hover:bg-violet-900'>View All Feature</Link>
                </div>
            </div>
            <Terminal />

            <div className='my-20 grid gap-10 w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                <div className="card  shadow-xl">
                    <figure className="px-10 pt-10 ">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-shop-local-logo-design_23-2149575772.jpg?w=2000" alt="Shoes" className=" w-44 h-44 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title lg:text-3xl md:text-2xl font-semibold text-orange-500">BUY PRODUCT</h2>
                        <p className='text-xl'>If you want any laptop product you can buy here . this is biggest second hand buy marker place and so stay with us</p>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <figure className="px-10 pt-10 ">
                        <img src="https://previews.123rf.com/images/krustovin/krustovin2004/krustovin200400036/144441869-fast-online-shopping-or-e-commerce-logo-vector-design-illustration-ecommerce-online-store-logo-.jpg" alt="Shoes" className=" w-44 h-44 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title lg:text-3xl md:text-2xl font-semibold text-orange-500">PUBLISH YOU ADD  </h2>
                        <p className='text-xl text-muted'>Eiusmod tempor incidiunt labore velit dolore magna aliqu sed eniminim veniam quis nostrud exercition eullamco laborisaa</p>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <figure className="px-10 pt-10 ">
                        <img src="https://www.pngitem.com/pimgs/m/525-5253557_sale-and-clearance-items-graphic-design-hd-png.png" alt="Shoes" className=" w-44 h-44 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title lg:text-3xl md:text-2xl font-semibold text-orange-500">Add PRODUCT</h2>
                        <p className='text-xl'>If you want any laptop product sale . you can sale here . this is biggest second hand sale  market place and so stay with us</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MainHome;