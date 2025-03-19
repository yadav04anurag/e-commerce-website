import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/shopcontext'
import Tittle from './Tittle';
import Productitem from './Productitem';
function LatestCollection() {
    let { products } = useContext(Shopcontext);
    const [latestproducts, setlatestproducts] = useState([]);
    useEffect(() => {
        setlatestproducts(products.splice(0, 20));
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Tittle text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestproducts.map((item) => (
                    <Productitem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection