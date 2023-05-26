/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex py-20 shadow-2xl justify-evenly bg-[#F9F9FF]">
                <img
                    className="w-[500px] "
                    src="/images/chefs/error.jpg"
                    alt=""
                />
                <div
                    className=" bg-left-bottom bg-no-repeat py-20 text-center " >
                    <h1 className="text-4xl font-bold text-[#60AA2D]">OOPS! PAGE NOT BE FOUND</h1>
                    <p className="text-xl my-5 mb-8 w-[590px]">
                        Sorry but the page you are looking for does not exist, have been
                        removed, name changed or is temporarily unavailable!
                    </p>
                    <Link
                        to="/"
                        className="text-[#60AA2D] shadow-lg hover:text-white hover:bg-[#60AA2D] text-lg font-semibold border-2 p-2 border-[#60AA2D] rounded-md"
                    >
                        Go back to the homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;