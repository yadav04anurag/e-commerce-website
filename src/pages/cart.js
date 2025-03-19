import React, { useContext, useState, useEffect } from 'react';
import { Shopcontext } from '../context/shopcontext';
import Tittle from "../components/Tittle";
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom'; // Correct import

function Cart() {
  const { products, currency, cartItems, updateQuantity } = useContext(Shopcontext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 bg-gray-50 min-h-screen px-4 sm:px-8">
      {/* Title */}
      <div className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        <Tittle text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart Items */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="py-6 border-b flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                {/* Product Image */}
                <img
                  className="w-20 sm:w-24 rounded-md object-cover"
                  src={productData?.image[0]}
                  alt={productData?.name}
                />

                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-lg font-medium text-gray-900">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-gray-700">
                    <p className="text-sm">{currency}{productData.price}</p>
                    <p className="px-3 py-1 text-xs sm:text-sm border bg-gray-100 rounded-md">
                      Size: {item.size}
                    </p>
                  </div>
                </div>

                {/* Quantity Input & Remove Button */}
                <div className="flex items-center gap-4">
                  <input
                    className="border px-2 py-1 w-12 sm:w-16 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      e.target.value === '' || e.target.value === '0'
                        ? null
                        : updateQuantity(item._id, item.size, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="p-2 rounded-md bg-red-200 hover:bg-red-700 text-white"
                  >
                    <img
                      className="w-5 h-5"
                      src={assets.bin_icon}
                      alt="Delete"
                    />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>

      {cartData.length > 0 ? (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px] max-w-[90%]">
            <CartTotal data={cartData} />
            <div className="w-full text-end">
              <button
                onClick={() => navigate('/place-order')} // Corrected Navigation
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
