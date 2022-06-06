import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FacebookLogo from '../../Assets/Social/facebook.svg';
import GoogleLogo from '../../Assets/Social/google.svg';
import GithubLogo from '../../Assets/Social/github.svg';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset, trigger } = useForm();
    const [email, setEmail] = useState('');

    const onSubmitParam = data => {
        console.log(data);
        reset()
    }

    return (
        <>
            <h1 className='text-center text-primary text-2xl font-bold pt-10 mb-5'>Deskala - Assignment</h1>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold mb-2">Login</h2>
                        <form onSubmit={handleSubmit(onSubmitParam)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">Email id</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="enter your email id"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('email')
                                        setEmail(e.target.value)
                                    }}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="enter your password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register('password', {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                                            message: "At least one uppercase, one lowercase, one number and one special character"
                                        }
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('password')
                                    }}
                                />
                                <label className="label">
                                    <small className='text-red-500'>{errors?.password?.message}</small>
                                </label>
                            </div>
                            <div className="text-center mt-10">
                                <input className='btn btn-primary w-1/2 max-w-xs text-white' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small>Don't have an account? <Link className='text-primary' to="/signup">Join Now</Link></small></p>
                        <div className="divider">OR</div>
                        <div className='flex flex-row items-center justify-center'>
                            <button className='mx-4'><img className='w-9' src={FacebookLogo} alt="" /></button>
                            <button className='mx-4'><img className='w-9' src={GoogleLogo} alt="" /></button>
                            <button className='mx-4'><img className='w-9' src={GithubLogo} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;