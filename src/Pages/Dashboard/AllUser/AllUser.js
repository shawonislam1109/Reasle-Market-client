import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers')
            const data = res.json();
            return data
        }
    })
    if (isLoading) {
        return <button className="btn loading">loading</button>
    }
    const AdminHandle = (id) => {
        fetch(`http://localhost:5000/allUsers/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    refetch()
                }
            })
    }
    console.log(allUser);
    return (
        <div className='md:w-2/3 mx-auto '>
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