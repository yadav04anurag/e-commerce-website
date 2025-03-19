import React, { useContext } from 'react'
import { Shopcontext } from '../context/shopcontext'
import { Link } from 'react-router';
function Productitem({ id, image, name, price }) {
    const {currency} = useContext(Shopcontext);
    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className=' overflow-hidden'>
                <img
                    className="hover:scale-110 transition duration-700 ease-in-out"
                    src={image[0]}
                    alt=""
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency} {price}</p>
        </Link>
    )
}

export default Productitem