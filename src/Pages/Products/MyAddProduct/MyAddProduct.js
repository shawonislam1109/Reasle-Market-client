import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ProductDetails from './ProductDetails';

const MyAddProduct = () => {
    const { user } = useContext(AuthContext)


    const { data: product = [], refetch, isLoading } = useQuery({
        queryKey: ['products', user.email],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-side.vercel.app/products?email=${user.email}`, {
                headers: {
                    authorization: (`Bearer ${localStorage.getItem('accessToken')}`)
                }
            })
            const data = res.json();
            return data
        }
    })
    if (isLoading) {
        return <div className='text-center'><button className="btn loading">loading</button></div>
    }
    console.log(product)

    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-3xl font-bold mb-10 text-orange-500'>My Added Product </h1>
            {
                product ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                        {
                            product && product.map(product => <ProductDetails
                                key={product._id}
                                product={product}
                                refetch={refetch}
                            />)
                        }
                    </div>
                    :
                    <>
                        <h1 className='text-center font-bold text-xl text-orange-500'>Product No Added</h1>
                    </>
            }
        </div>
    );
};

export default MyAddProduct;