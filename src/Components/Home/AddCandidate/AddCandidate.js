import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddCandidate = () => {
    const { register, formState: { errors }, handleSubmit, reset, trigger } = useForm();
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
                                    },
                                    // pattern: {
                                    //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    //     message: 'Provide a valid Email'
                                    // }
                                })}
                                onKeyUp={(e) => {
                                    trigger('name')
                                    // setEmail(e.target.value)
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
                                    },
                                    // pattern: {
                                    //     value: /[2-9]{2}\d{8}/,
                                    //     message: 'Provide a valid Date'
                                    // }
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
                                    },
                                    // pattern: {
                                    //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    //     message: 'Provide a valid Email'
                                    // }
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
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
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
                                    pattern: {
                                        // value: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                                        // message: "At least one uppercase, one lowercase, one number and one special character"
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger('pin')
                                }}
                            />
                            <label className="label">
                                <small className='text-red-500'>{errors?.pin?.message}</small>
                            </label>
                        </div>

                    </div>
                </div>
                <div className="text-center mt-10">
                    <input className='btn btn-primary w-1/2 text-white' type="submit" value="Sign Up" />
                </div>
            </form>
        </>
    );
};

export default AddCandidate;