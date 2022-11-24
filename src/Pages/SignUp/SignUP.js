import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const SignUP = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();


    const loginSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setError('')
                updateUser(info)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => console.log(error))
                console.log(user)
                toast.success('crate user successfully')
            })
            .catch(Error => {
                console.log(Error)
                setError(Error.message);

            })
        const info = {
            displayName: data.name
        }
    }


    return (
        <div className='h-[800px] flex  justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-3xl text-center'> Sign Up  </h1>
                <form onSubmit={handleSubmit(loginSubmit)}>
                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name",
                            { required: true }
                        )} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email",
                            { required: "Email Address is required" }
                        )} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role='alert' className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",
                            {
                                required: "password  is required",
                                minLength: { value: 6, message: ' you password must be 6 character & longer ' },
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, message: 'password must be strong' }
                            },

                        )} type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" />
                        <label className="label mt-2">
                            <span className="label-text">Forget password</span>
                        </label>
                        {errors.password && <p role='alert' className='text-red-500'>{errors.password?.message}</p>}

                    </div>
                    <div>
                        {error && <p className='text-red-500'>{error}</p>}
                    </div>
                    <input className='w-full bg-slate-700 hover:bg-slate-900 cursor-pointer mt-2 text-white text-center p-3 rounded-lg' value='Sign Up' type="submit" />
                </form>
                <div className="flex flex-col w-full border-opacity-50">
                    <p className='mt-3 text-orange-500 font-medium'>NIBEN R DIBEN ? <Link to='/signup' className=' text-blue-600'>create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-success grid p-3 card rounded-xl border-2 border-accent place-items-center">CONTINUE WITH GOOGLE </button>
                </div>
            </div>
        </div>
    );
};

export default SignUP;