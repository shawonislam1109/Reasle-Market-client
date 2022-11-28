import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AddToCart = () => {
    const SingleProduct = useLoaderData();
    const { brand, name, Price, image, location, details, _id } = SingleProduct[0]
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();


    const AddToCartSubmit = (data) => {

        fetch('http://localhost:5000/orderProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    navigate('/product')
                    toast.success('Your item Added  Successfully')
                }
            })
    }
    return (
        <div>

            <div className=' my-20 flex w-full   justify-center items-center'>
                <div className=' p-9 mx-16 lg:mx-0 rounded-md shadow-2xl bg-violet-100 '>
                    <h1 className='text-3xl text-center font-bold text-orange-500'>  </h1>
                    <form onSubmit={handleSubmit(AddToCartSubmit)}>
                        <div className=" form-control w-full  ">
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Your Name</span>
                                    </label>
                                    <input {...register("Your_name",)} required type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Phone</span>
                                    </label>
                                    <input {...register("Phone",)} required type="number" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Email</span>
                                    </label>
                                    <input {...register("email",)} defaultValue={user.email} readOnly type="text" className="input input-bordered w-full text-xl font-medium text-slate-500 " />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Brand</span>
                                    </label>
                                    <input {...register("brand",)} defaultValue={brand} readOnly type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Name</span>
                                    </label>
                                    <input {...register("name",)} defaultValue={name} readOnly type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Price</span>
                                    </label>
                                    <input {...register("Price",)} defaultValue={Price} readOnly type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Image</span>
                                    </label>
                                    <input {...register("image",)} defaultValue={image} readOnly type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Location</span>
                                    </label>
                                    <input {...register("location",)} defaultValue={location} readOnly type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Product Id</span>
                                    </label>
                                    <input {...register("product_id",)} defaultValue={_id} readOnly type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>
                            </div>

                            <div >

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Details</span>
                                    </label>

                                    <textarea {...register("Details",)} readOnly type="text" defaultValue={details} className="input input-bordered w-full h-24 text-xl font-medium text-slate-500" />

                                </div>

                            </div>

                        </div>

                        <input className='w-full mt-7 font-bold bg-orange-700 hover:bg-orange-900 cursor-pointer  text-white text-center p-3 rounded-lg' value='ADD TO CART' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;