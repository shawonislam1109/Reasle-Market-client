import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DetailsHP from '../../Products/HpLaptop/DetailsHP';

const ShortProduct = () => {
    const { data: Products = [], } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side.vercel.app/allProducts')
            const data = res.json();
            return data;
        }
    })
    const sliceProduct = Products.slice(0, 4)
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 w-9/12 mx-auto my-10 rounded-md'>
            {
                Products && sliceProduct.map(product =>
                    <DetailsHP
                        key={product._id}
                        product={product}
                    ></DetailsHP>
                )
            }

        </div>


    );
};

export default ShortProduct;