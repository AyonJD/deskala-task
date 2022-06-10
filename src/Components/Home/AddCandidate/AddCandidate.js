import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AddCandidate = () => {
    const { register, formState: { errors }, handleSubmit, reset, trigger } = useForm();
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const onSubmitParam = async (data) => {
        console.log(data);
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitParam)}>
                <div className='md:flex w-2/3 mx-auto'>
                    <div className='flex-1 mr-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-black">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="enter your name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                onKeyUp={(e) => {
                                    trigger('name')
                                }}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-black">Date of Birth</span>
                            </label>
                            <input
                                type="date"
                                placeholder="enter your birth date"
                                className="input input-bordered w-full"
                                {...register("date", {
                                    required: {
                                        value: true,
                                        message: 'Date is Required'
                                    }
                                })}
                                onKeyUp={(e) => {
                                    trigger('date')
                                }}
                            />
                            <label className="label">
                                {errors.date?.type === 'required' && <span className="label-text-alt text-red-500">{errors.date.message}</span>}
                                {errors.date?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.date.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-semibold text-black">Age</span>
                            </label>
                            <input
                                type="number"
                                placeholder="enter your age"
                                className="input input-bordered w-full"
                                {...register('age', {
                                    required: {
                                        value: true,
                                        message: 'Age is Required'
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger('age')
                                }}
                            />
                            <label className="label">
                                {errors.age?.type === 'required' && <span className="label-text-alt text-red-500">{errors.age.message}</span>}

                            </label>
                        </div>

                    </div>

                    <div className='flex-1 ml-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-black">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="enter your address"
                                className="input input-bordered w-full"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                                onKeyUp={(e) => {
                                    trigger('address')
                                    // setEmail(e.target.value)
                                }}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                {errors.address?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-black">State</span>
                            </label>
                            <select
                                className="select select-bordered w-full"
                                {...register("state", {
                                    required: {
                                        value: true,
                                        message: 'State is Required'
                                    },

                                })}
                                onKeyUp={(e) => {
                                    trigger('state')
                                }}
                            >
                                <option disabled selected>Select your state</option>
                                <option>California</option>
                                <option>Sandiego</option>
                                <option>Los Angeles</option>
                                <option>New York</option>
                                <option>Miami</option>
                            </select>

                            <label className="label">
                                {errors.date?.type === 'required' && <span className="label-text-alt text-red-500">{errors.date.message}</span>}
                                {errors.date?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.date.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-semibold text-black">Pin Code</span>
                            </label>
                            <input
                                type="number"
                                placeholder="enter your 6 digit Pin Code"
                                className="input input-bordered w-full"
                                {...register('pin', {
                                    required: 'Pin is required',
                                    
                                })}
                                onKeyUp={() => {
                                    trigger('pin')
                                }}
                            />
                            <label className="label">
                                <small className='text-red-500'>{errors?.pin?.message}</small>
                            </label>
                        </div>

                        <div className="mt-10 text-right">
                            <button onClick={() => navigate('/')} className='btn btn-outline w-[130px] btn-primary hover-text mr-5'>Cancel</button>
                            <input className='btn btn-primary w-[130px] text-white' type="submit" value="Sign Up" />
                        </div>
                    </div>
                </div>

            </form>
        </>
    );
};

export default AddCandidate;