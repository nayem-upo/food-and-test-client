/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser, auth, googleLogin, gitHubLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [change, setChange] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function buttonHandler() {
        setChange(!change)
    }
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if (password.length > 5) {
            createUser(email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate(from, { replace: true });
                    setError("")
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                    }).then(() => {
                        setSuccess("Your account created successfully")
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage)
                    setSuccess("")
                });

        }
        else{
            setError("Password should be at least 6 characters")
        }
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
                // ...
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
        <div className='flex justify-center py-10 pb-14 bg-[#F9F8FF]'>
            <div className={`relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none`}>
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-[#60AA2D] antialiased">
                    Sign Up
                </h4>
                <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Enter your details to register.
                </p>
                <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#60AA2D] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                name='name'
                                required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#60AA2D] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#60AA2D] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#60AA2D] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Name
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#60AA2D] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                name='email'
                                required
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
                                    required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#60AA2D] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#60AA2D] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#60AA2D] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#60AA2D] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                name='photo'
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#60AA2D] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#60AA2D] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#60AA2D] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Photo URL
                            </label>
                        </div>
                    </div>
                    <div className="inline-flex items-center">
                        <label
                            className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                            htmlFor="checkbox"
                            data-ripple-dark="true"
                        >
                            <input
                                onChange={buttonHandler}
                                type="checkbox"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#60AA2D] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#60AA2D] checked:bg-[#60AA2D] checked:before:bg-[#60AA2D] hover:before:opacity-10"
                                id="checkbox"
                            />
                            <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </label>
                        <label
                            className="mt-px cursor-pointer select-none font-bold text-[#60AA2D]"
                            htmlFor="checkbox"
                        >
                            <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                                I agree the
                                <a
                                    className="font-medium transition-colors text-[#60AA2D] hover:text-[#458d16]"
                                    href="#"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </p>
                        </label>
                    </div>
                    {
                        <p className='text-red-600'>{error}</p>
                    }
                    {
                        <p className='text-[#60AA2D]'>{success}</p>
                    }
                    <input disabled={change} className='mt-6 block w-full select-none rounded-lg bg-[#60AA2D] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#60AA2D]/20 transition-all hover:shadow-lg hover:shadow-[#60AA2D]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="submit" value="Register" />
                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Already have an account? <span></span>

                        <Link to="/login" className="font-medium text-[#60AA2D] transition-colors hover:text-[#43960b]"
                            href="#">Sign In</Link>
                    </p>
                </form>
                <div className='flex flex-col gap-3'>
                    <div className="text-center my-0">OR</div>
                    <button onClick={handleGoogleLogin} className='bg-[#5faa2d3d] hover:bg-[#60AA2D]  rounded-t-lg flex items-center gap-2 border justify-center p-2 w-[100%]'> Sign Up with Google</button>
                    <button onClick={handleGithubLogin} className='bg-[#5faa2d3d] hover:bg-[#60AA2D] rounded-b-lg flex items-center gap-2 border justify-center p-2 w-[100%]'> Sign Up with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Register;