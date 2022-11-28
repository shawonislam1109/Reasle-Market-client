import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';

const AllUser = () => {
    useTitle('Dashboard/All user')

    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side.vercel.app/allUsers')
            const data = res.json();
            return data
        }
    })
    if (isLoading) {
        return <div className='text-center'><button className="btn loading">loading</button></div>
    }
    const AdminHandle = (id) => {
        fetch(`https://resale-market-server-side.vercel.app/allUsers/${id}`, {
            method: 'PUT',
            headers: {
                authorization: (`Bearer ${localStorage.getItem('accessToken')}`)
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Admin place success full')
                    refetch()
                }
            })
    }
    return (
        <div className='md:w-2/3 mx-auto mb-10 '>
            <h1 className='text-3xl font-bold mb-5 text-orange-500'>All User </h1>
            <div className="flex justify-center items-center w-52 mx-auto md:w-full">
                <table className="table table-zebra md:w-full ">

                    <thead className=''>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser && allUser.map((user, i) => <tr
                                key={user._id}
                            >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.user_role}</td>
                                <th>
                                    {
                                        user?.role !== 'admin' && <button onClick={() => AdminHandle(user._id)} className='btn btn-error btn-sm'>Admin</button>
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;