/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faHeart, faPlateWheat, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Recipes = ({ recipe }) => {
    const { name, ingredients, cooking_method, rating, image } = recipe;
    const [able, setAble] = useState('')
    const [color, setColor] = useState('text-[#60AA2D]')
    const notify = () => {
        toast('💚Added the recipe as your favorite!')
        setAble('btn-disabled bg-white')
        setColor('text-[#D5D5D5]')
    };

    return (
        <div className='mx-auto mb-12 dark:text-slate-800 dark:bg-white'>
            <div className='shadow-xl border-2 border-[#60AA2D] h-[600px] w-[330px]  md:w-96 flex flex-col justify-between'>
                <div>
                    <div>
                        <img src={image} className='  w-96 h-48 object-cover' alt="" />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-xl font-semibold m-3'>{name}</h1>
                        <p className='ms-3 font-semibold list-decimal'><span className='text-[#60AA2D] font-semibold'>Ingredients:</span> {ingredients.map(ingredient => <li key={ingredient}> {ingredient} </li>)}</p>
                        <p className='ms-3 font-semibold'><span className='text-[#60AA2D] font-semibold'>Cooking Method:</span> {cooking_method.slice(0, 170)}...</p>
                    </div>
                </div>
                <div>
                    <hr className="mb-0 mt-3 h-0.5 border-t-0 bg-[#60AA2D] opacity-100 dark:opacity-50" />
                    <div className='flex justify-evenly'>
                        <p className='p-2'><FontAwesomeIcon className='text-[#60AA2D]' icon={faStar} /> Rating: <span className='text-[#60AA2D] font-semibold'>{rating}</span></p>
                        <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-[#60AA2D] opacity-100 dark:opacity-50"></div>
                        <p className='p-2 flex items-center gap-1'> <button onClick={notify} className={able}><FontAwesomeIcon className={`${color} cursor-pointer`} icon={faHeart} /></button> Favourite  <span className='text-[#60AA2D] font-semibold'></span></p>
                        <Toaster />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recipes;