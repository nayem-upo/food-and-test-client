/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import MainBanner from './MainBanner';
import Chefs from './Chefs';
import FootBanner from './FootBanner';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div className={`${theme? "dark": ""}`}>
            <MainBanner></MainBanner>
            <Chefs></Chefs>
            <div className="bg-[url('https://i.ibb.co/kSCFfPd/green.png')] md:py-14 py-6 shadow-xl bg-cover text-center">
                <h1 className='text-white font-bold md:text-5xl text-2xl'>Have any question to ask? Call us at</h1>
                <h1 className='text-white font-bold mt-2 md:text-5xl text-2xl'>888 333 9999</h1>
            </div>
            <FootBanner></FootBanner>
        </div>
    );
};

export default Home;