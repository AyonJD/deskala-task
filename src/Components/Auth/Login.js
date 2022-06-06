import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogo from '../../Assets/Social/facebook.svg';
import GoogleLogo from '../../Assets/Social/google.svg';
import GithubLogo from '../../Assets/Social/github.svg';

const Login = () => {

    return (
        <>
            <h1 className='text-center text-primary text-2xl font-bold pt-10 mb-5'>Deskala - Assignment</h1>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold mb-2">Login</h2>
                        <form>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">Email id</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="enter your email id"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="enter your password"
                                    className="input input-bordered w-full max-w-xs"
                                />
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