import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import DeleteModal from './DeleteModal';

const MyOder = () => {
    const [stateDelete, setSateDelete] = useState(null);

    const { user } = useContext(AuthContext);

    const { data: MyOderData = [], refetch, isLoading } = useQuery({
        queryKey: ['orderProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-side.vercel.app/orderProducts?email=${user?.email}`, {
                headers: {
                    authorization: (`Bearer ${localStorage.getItem('accessToken')}`)
                }
            })
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <div className='text-center'><button className="btn loading">loading</button></div>
    }



    return (
        <div className='lg:w-2/3 mx-auto '>
            <h1 className='text-3xl font-bold mb-5 text-orange-500'>My Order Product</h1>
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
                            MyOderData && MyOderData.map((order, i) => <tr
                                key={order._id}>
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
                                    {
                                        order?.payment ?
                                            <>
                                                <button className=' disabled text-green-600 cursor-not-allowed'>paid</button>
                                            </>
                                            :
                                            <>
                                                <Link to={`/product/dashboard/payment/${order._id}`}><button className="btn md:font-bold btn-success md:btn-sm btn-xs">Pay</button></Link>
                                            </>
                                    }


                                    <label onClick={() => setSateDelete(order)} htmlFor="delete-modal" className="btn md:font-bold mt-2 md:mt-0  md:ml-3 ml-2 btn-error btn-xs  md:btn-sm">Delete</label>

                                </th>
                            </tr>
                            )
                        }



                    </tbody>

                </table>
            </div>
            <div>
                {
                    stateDelete && <DeleteModal
                        stateDelete={stateDelete}
                        setSateDelete={setSateDelete}
                        refetch={refetch}
                    ></DeleteModal>
                }
            </div>
        </div>
    );
};

export default MyOder;