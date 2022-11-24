import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MapProduct from './MapProduct';

const ShortProduct = () => {
    const { data: Products = [], } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allProducts')
            const data = res.json();
            return data;
        }
    })
    const sliceProduct = Products.slice(0, 4)
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 w-9/12 mx-auto my-10 rounded-md'>
            {
                Products && sliceProduct.map(product =>
                    <MapProduct
                        key={product._id}
                        product={product}
                    />
                )
            }

        </div>


    );
};

export default ShortProduct;