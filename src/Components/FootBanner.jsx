/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const FootBanner = () => {
    const { handleScroll } = useContext(AuthContext)
    return (
        <div>
            <div className="hero md:py-20 py-6 bg-[#F7F7F7]">
                <div className="flex-col flex justify-evenly lg:flex-row-reverse">
                    <img src="https://i.ibb.co/WKKghbP/plate.png" className="max-w-sm w-full mx-auto" />
                    <div className='w-[90%] mx-auto'>
                        <p className='font-bold'>It's all about good</p>
                        <h1 className="md:text-5xl text-3xl font-bold">Good Food & Test!</h1>
                        <p className="py-3 md:w-96">Teriyaki chicken is a popular dish that is made by grilling or pan-frying chicken that has been marinated in a teriyaki sauce, typically made with soy sauce, sake, mirin, sugar, and ginger. </p>
                        <button onClick={handleScroll} className='bg-[#60AA2D] hover:bg-[#3b7b10] btn border-none text-white rounded'>Meet Chefs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootBanner;