/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const { loginUser, googleLogin, gitHubLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(from, { replace: true });
                setError("")
                setSuccess("Login successful")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccess("")
            });

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }
    const handleGithubLogin = () => {
        gitHubLogin()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
                setError("")
                setSuccess("Login successful")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccess("")
            });
    }

    return (
        <div className='text-center bg-[#F9F8FF] pb-14'>
            <div className='flex justify-center py-10'>
                <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <h4 className="block font-sans text-left text-2xl font-semibold leading-snug tracking-normal text-[#60AA2D] antialiased">
                        Login
                    </h4>
                    <p className="text-left mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Enter your login details to continue.
                    </p>
                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#60AA2D] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" " name='email'
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#60AA2D] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#60AA2D] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#60AA2D] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px] justify-center items-center flex">
                                <div className='w-full'>
                                    <input
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#60AA2D] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" " name='password'
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#60AA2D] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#60AA2D] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#60AA2D] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Password
                                    </label>
                                </div>
                            </div>
                            <p className='text-[#60AA2D] underline text-left '> <Link to="/reset"><small className='cursor-pointer'>Forgot password?</small></Link> </p>
                        </div>

                        <p className='text-red-600 text-left'>{error}</p>
                        <p className='text-[#60AA2D] text-left'>{success}</p>

                        <input className='mt-6 block w-full select-none rounded-lg bg-[#60AA2D] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#9775FF]/20 transition-all hover:shadow-lg hover:shadow-[#9775FF]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="submit" value="Login" />

                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Haven't any account? Please <span></span>

                            <Link to="/register" className="font-medium text-[#60AA2D] transition-colors hover:text-[#429709]"
                                href="#">Register</Link>
                        </p>
                    </form>
                    <div className='flex flex-col gap-3'>
                        <div className="divider my-0">OR</div>
                        <button onClick={handleGoogleLogin} className='bg-[#5faa2d3d] hover:bg-[#60AA2D]  rounded-t-lg flex items-center gap-2 border justify-center p-2 w-[100%]'>  Sign In with Google</button>
                        <button onClick={handleGithubLogin} className='bg-[#5faa2d3d] hover:bg-[#60AA2D] rounded-b-lg flex items-center gap-2 border justify-center p-2 w-[100%]'>  Sign In with GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;