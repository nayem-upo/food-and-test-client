/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { AuthContext } from './AuthProvider';

const Chefs = () => {
    const {ref} = useContext(AuthContext);
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://food-and-test-server-nayem-upo.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div ref={ref} className='dark:bg-slate-800'>
            <h1 className='font-bold text-center py-4 md:text-5xl text-3xl text-[#60AA2D]'>Meet Our Chefs</h1>
            <h1 className='font-bold  text-center my-4 md:text-2xl text-[#60AA2D]'>We have the most experienced chefs!</h1>
            <hr className="md:mb-16 mb-8 md:w-[550px] w-[90%] mx-auto h-0.5 border-t-0 bg-[#60AA2D] opacity-100 dark:opacity-50" />
            <div className='grid grid-rows-6 grid-flow-col gap-4 md:grid-rows-2 md:grid-flow-col pb-20 md:justify-evenly md:gap-10 justify-center md:mx-0'>

                {
                    chefs.map(chef => <ChefCard chef={chef} key={chef.id}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;