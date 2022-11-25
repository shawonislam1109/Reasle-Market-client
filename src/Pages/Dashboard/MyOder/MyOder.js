import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyOder = () => {
    const { user } = useContext(AuthContext)

    const { data: MyOderData = [] } = useQuery({
        queryKey: ['orderProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orderProducts?email=${user?.email}`)
            const data = res.json();
            return data;
        }
    })
    console.log(MyOderData)
    return (
        <div className='lg:w-2/3 mx-auto '>
            <div className=" lg:w-full flex justify-center items-center mb-10">
                <table className="table lg:w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Order</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            MyOderData && MyOderData.map((order, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle lg:w-20 lg:h-20  w-12 h-12">
                                                <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="md:font-bold lg:text-xl ml-2">{order.brand}</div>
                                            <div className="lg:text-md ml-2 md:font-medium hidden md:flex">{order.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order.location}
                                </td>
                                <td className='md:font-bold'><span className='text-orange-600'>$</span> {order.Price}</td>
                                <th>
                                    <button className="btn md:font-bold btn-error md:btn-sm btn-xs">Pay</button>
                                    <button className="btn md:font-bold mt-2 md:mt-0  block md:inline md:ml-3 btn-error btn-xs  md:btn-sm">Delete</button>
                                </th>
                            </tr>
                            )
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOder;