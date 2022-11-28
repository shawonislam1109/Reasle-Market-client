import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';
import image from './G.png'


const SignUP = () => {
    const provider = new GoogleAuthProvider();
    const { createUser, updateUser, GoogleSingIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    useTitle('sign Up ')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();


    const loginSubmit = (data) => {

        const currentUser = {
            email: data.email,
            user_role: data.user_role,
            name: data.name

        }
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setError('')
                updateUser(info)
                    .then(() => {
                        fetch('http://localhost:5000/allUser', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(currentUser)
                        })
                            .then(res => res.json())
                            .then(result => {
                                console.log(result)
                                SingUserToken(data.email)
                            })
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

    const SingUserToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`,)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    console.log(data)
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/')
                }
            })
    }


    const googleSing = () => {
        GoogleSingIn(provider)
            .then(result => {
                const user = result.user;

                const mediaUser = {
                    email: user.email,
                    name: user.displayName,
                    user_role: 'Buyer'
                }
                fetch('http://localhost:5000/allUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(mediaUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        SingUserToken(user.email)
                        navigate('/')
                    })


            })
            .catch(error => console.log(error))
    }


    return (
        <div className='h-[800px] flex  justify-center items-center'>
            <div className='w-96 p-9 rounded-md shadow-2xl bg-violet-100 '>
                <h1 className='text-3xl text-center font-bold text-orange-500'> Sign Up  </h1>
                <form onSubmit={handleSubmit(loginSubmit)}>
                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-orange-500">Name</span>
                        </label>
                        <input {...register("name",
                            { required: true }
                        )} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-orange-500">User Role</span>
                        </label>
                        <select {...register("user_role",
                            { required: true }
                        )} className="select select-bordered w-full max-w-xs">
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>

                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-orange-500">Email</span>
                        </label>
                        <input {...register("email",
                            { required: "Email Address is required" }
                        )} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role='alert' className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-orange-500">Password</span>
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
                    <input className='w-full font-bold bg-orange-700 hover:bg-orange-900 cursor-pointer mt-2 text-white text-center p-3 rounded-lg' value='Sign Up' type="submit" />
                </form>

                <div className="flex flex-col w-full border-opacity-50">
                    <p className='mt-3 text-orange-500 font-medium'>NIBEN R DIBEN ? <Link to='/login' className=' text-blue-600'>i have already account</Link></p>
                    <div className="divider">OR</div>
                    <div onClick={googleSing} className="grid  py-4 cursor-pointer hover:bg-slate-400 hover:font-bold  card rounded-xl border-2 border-accent place-items-center font-semibold"> <img className='w-12 h-12 flex' src={image} alt="" /> CONTINUE WITH GOOGLE</div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;