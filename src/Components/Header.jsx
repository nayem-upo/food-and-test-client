/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { faUser } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const navigate = useNavigate()
    const { user, logOut, toggleTheme, theme } = useContext(AuthContext);
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;

    const logOutUser = () => {
        logOut();
        navigate("/")
    }

    return (
        <div className={`${theme? "dark": ""} sticky top-0 z-40 shadow-xl`}>
            <div className="navbar sticky bg-[#EEFDDF] dark:bg-[#032b39] dark:text-white flex items-center md:gap-20 justify-evenly">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to="/"><img className='w-12' src="https://i.ibb.co/9HsqFNT/logo.png" alt="" /> Food & Test</Link>
                </div>

                <div className='flex justify-center items-center gap-10 md:gap-20 me-6 md:me-0'>
                    <NavLink className={({ isActive }) => isActive ? "font-bold text-[#60AA2D]" : "font-bold hover:text-[#60AA2D]"} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "font-bold text-[#60AA2D]" : "font-bold hover:text-[#60AA2D]"} to="/blog">Blog</NavLink>
                </div>
                {
                    user && <div className="flex-none">
                        <div className="dropdown dropdown-end dropdown-hover">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">

                                    {
                                        photoURL && <img src={photoURL} />
                                    }
                                    {
                                        !photoURL && <FontAwesomeIcon className='mt-3' icon={faUser} />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-[#191f1325] rounded-box w-52">
                                <li className=' bg-slate-100 dark:bg-[#2B1553] text-[#60AA2D] justify-between hover:bg-slate-300'>
                                    <Link to="/edit" className="justify-between pt-3">
                                        <span className=' font-bold text-base'>{displayName}</span>
                                        <span className="badge bg-[#60AA2D] text-white border-none">Edit</span>
                                    </Link>
                                </li>
                                <hr />
                                <li onClick={logOutUser} className='p-3 dark:bg-[#2B1553] hover:bg-slate-300 cursor-pointer text-red-600 font-bold bg-slate-100'>Logout</li>
                                <span className='flex justify-between rounded-b-2xl dark:bg-[#2B1553] p-3 hover:bg-slate-300 cursor-pointer text-[#f91aa3] bg-slate-100 font-bold hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Theme
                                    <input
                                        onClick={toggleTheme}
                                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer outline focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                    />
                                </span>


                            </ul>
                        </div>
                    </div>
                }

                {
                    !user && <Link to="/login"><button className='btn bg-[#60AA2D] border-none text-white rounded hover:bg-[#3b7b10]'>Login</button></Link>
                }

            </div>
            <hr className="h-1 border-t-0 mx-auto bg-[#A1CD44] opacity-100 " />
        </div>
    );
};

export default Header;