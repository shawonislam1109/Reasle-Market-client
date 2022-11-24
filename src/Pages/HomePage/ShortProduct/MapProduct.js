import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MapProduct = ({ product }) => {
    const { image, name, details, Price, location } = product;
    return (
        <div className="card card-compact py-5 bg-white shadow-xl">
            <figure className='relative'>
                <img src={image} alt="Shoes" />
                <p className='text-xl font-bold absolute bottom-12 bg-violet-800 py-3 px-5 left-0 rounded-sm '><span className='text-orange-500 '>Price : $</span> <span className='text-white'>{Price}</span></p>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-orange-500">{name}</h2>
                <p className='text-xl'>{details ? details.slice(0, 100) + "...see more" : details}</p>
                <p className='text-xl flex'> <FaLocationArrow></FaLocationArrow> <span className='text-slate-700'>{location}</span> </p>
                <div className='text-end rounded-md'>
                    <Link className='px-5 py-3 text-white font-bold rounded-md  bg-violet-600'>Buy</Link>
                </div>
            </div>

        </div>
    );
};

export default MapProduct;