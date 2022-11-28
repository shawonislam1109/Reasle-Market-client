import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_pk_key);

const Payment = () => {
    useTitle('dashboard/payment')

    const paymentData = useLoaderData();
    const { Price, brand, name } = paymentData[0];
    return (
        <div className='w-2/4 mx-auto'>
            <h1 className='text-2xl '>Payment for <span className='font-bold'>{brand}</span>  laptop , Model  <span className='font-bold'>{name}</span></h1>
            <h1 className='text-2xl '>Payment will be for this product <span className='text-3xl font-bold'>$</span><span className='text-orange-600 text-3xl font-bold'>{Price}</span> </h1>

            <div className='w-2/5 mt-5'>
                <Elements stripe={stripePromise}>
                    <CheckOut paymentData={paymentData} />
                </Elements>
            </div>


        </div>
    );
};

export default Payment;