import React, { useContext, useState, useEffect } from 'react';
import Tittle from './Tittle';
import Productitem from './Productitem';
import { Shopcontext } from '../context/shopcontext';

function Bestseller() {
    const { products } = useContext(Shopcontext);
    const [bestSeller, setBestSeller] = useState([]);
    const bestProduct = products.filter((item)=> item.bestseller===true)
    useEffect(() => {
            setBestSeller(bestProduct.slice(0,5));
    }, []); 
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-3xl py-8'>
                    <Tittle text1={'BEST'} text2={'SELLERS'} />
                </h1>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item) => {
                    return (
                        <Productitem 
                            key={item._id} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Bestseller;
