import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DetailsHP from '../HpLaptop/DetailsHP';

const DellLaptop = () => {
    const { data: CategoryData = [] } = useQuery({
        queryKey: ['HP'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side.vercel.app/allProduct?brand=DELL')
            const data = res.json();
            return data
        }
    })

    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-2xl lg:text-3xl font-bold text-center'><span className='text-orange-500'>DELL</span> <span className='text-slate-700'>Laptop</span></h1>

            <div className='grid md:grid-cols-2 grid-cols-1  gap-5 w-11/12 mx-auto my-10 rounded-md'>
                {
                    CategoryData && CategoryData.map(product => <DetailsHP
                        key={product._id}
                        product={product}
                    ></DetailsHP>)
                }
            </div>
        </div>
    );
};

export default DellLaptop;