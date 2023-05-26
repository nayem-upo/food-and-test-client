/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PassReset = () => {
    const { passwordReset } = useContext(AuthContext)
    const [status1, setStatus] = useState('hidden')
    const [status2, setStatus2] = useState('')
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const resetPassword = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;

        passwordReset(email)
            .then(() => {
                // Password reset email sent!
                // ..
                setStatus("")
                setStatus2("hidden")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }
    return (
        <div className='bg-[#F9F8FF] flex justify-center py-24'>
            <div>
                <h1 className={`${status1} md:w-full w-[90%] text-center mx-auto text-2xl text-[#60AA2D] font-semibold`}>Please check your email and reset your password!</h1>
            </div>
            <div className={`${status2} relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none`}>
                <h4 className="block font-sans text-left text-2xl font-semibold leading-snug tracking-normal text-[#60AA2D] antialiased">
                    Reset Password
                </h4>
                <p className="text-left mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Enter your email.
                </p>
                <form onSubmit={resetPassword} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#60AA2D] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " name='email' required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#60AA2D] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#60AA2D] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#60AA2D] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>

                    </div>

                    <p className='text-red-600 text-left'>{error}</p>
                    <p className='text-[#60AA2D] text-left'>{success}</p>

                    <input className='mt-6 block w-full select-none rounded-lg bg-[#60AA2D] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#60AA2D]/20 transition-all hover:shadow-lg hover:shadow-[#60AA2D]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="submit" value="Send Password Reset Link" />

                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Haven't any account? Please <span></span>

                        <Link to="/register" className="font-medium text-[#60AA2D] transition-colors hover:text-blue-700"
                            href="#">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PassReset;