import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbbKey;
    const navigate = useNavigate();

    const AddToCartSubmit = (data) => {
        const image = (data.image[0])
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(formData => {
                // console.log(formData.data.url)
                const AddProduct = {
                    ...data,
                    image: formData.data.url,
                }
                fetch('https://resale-market-server-side.vercel.app/allProducts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(AddProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            console.log(data)
                            navigate('/product')
                            toast.success('Your item Added  Successfully')
                        }
                    })

            })

    }
    return (
        <div>

            <div className=' my-20 flex w-full   justify-center items-center'>
                <div className=' p-9 mx-16 lg:mx-0 rounded-md shadow-2xl bg-violet-100 '>
                    <h1 className='text-3xl text-center font-bold text-orange-500'>ADD PRODUCT</h1>
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
                                    <select {...register("brand",)} type="text" className="input input-bordered w-full text-xl font-medium text-slate-500">
                                        <option value='DELL'>DELL</option>
                                        <option value='HP'>HP</option>
                                        <option value='APPLE'>APPLE</option>
                                    </select>
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Name/processor</span>
                                    </label>
                                    <input {...register("name",)} required type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Price</span>
                                    </label>
                                    <input {...register("Price",)} required type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Image</span>
                                    </label>
                                    <input {...register("image",)} required type="file" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Location</span>
                                    </label>
                                    <input {...register("location",)} required type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Used Year</span>
                                    </label>
                                    <input {...register("used",)} required type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Date</span>
                                    </label>
                                    <input {...register("date",)} required type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>
                            <div className='flex '>

                                <div className='mr-5'>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Previous Price</span>
                                    </label>
                                    <input {...register("previous_price",)} required type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">My product </span>
                                    </label>
                                    <input {...register("my_product",)} required defaultValue="added" type="text" className="input input-bordered w-full text-xl font-medium text-slate-500" />
                                </div>

                            </div>

                            <div >

                                <div>
                                    <label className="label">
                                        <span className="text-xl font-bold text-orange-500">Details</span>
                                    </label>

                                    <textarea {...register("details",)} required className="input input-bordered w-full h-24 text-xl font-medium text-slate-500" />

                                </div>

                            </div>

                        </div>

                        <input className='w-full mt-7 font-bold bg-orange-700 hover:bg-orange-900 cursor-pointer  text-white text-center p-3 rounded-lg' value='ADD PRODUCT' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;