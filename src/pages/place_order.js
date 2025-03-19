import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import { Shopcontext } from '../context/shopcontext';

function Placeorder() {
  let { getCartAmount } = useContext(Shopcontext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });
  const [method, setMethod] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method) {
      alert('Please select a payment method');
      return;
    }
    console.log('Order placed', formData, method);
    navigate('/order-confirmation');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 flex flex-col md:flex-row gap-8">
      
      {/* Left Section - Form */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center md:text-left">
          Place Your Order
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Details */}
          <div className="grid gap-4">
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          {/* Payment Method */}
          <h3 className="text-lg font-medium text-gray-800 mt-6">Payment Method</h3>
          <div className="grid gap-4">
            {/* Stripe */}
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer shadow-sm transition-all ${
                method === 'stripe' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'
              }`}
            >
              <img src={assets.stripe_logo} alt="Stripe" className="w-10" />
              <p className="text-gray-700">Pay with Stripe</p>
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer shadow-sm transition-all ${
                method === 'razorpay' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'
              }`}
            >
              <img src={assets.razorpay_logo} alt="Razorpay" className="w-10" />
              <p className="text-gray-700">Pay with Razorpay</p>
            </div>

            {/* Cash on Delivery */}
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer shadow-sm transition-all ${
                method === 'cod' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'
              }`}
            >
              <img src={assets.cod} alt="Cash on Delivery" className="w-10" />
              <p className="text-gray-700 flex items-center gap-2">
                Cash on Delivery 
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-5 w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-900 transition-all"
          >
            Confirm & Place Order
          </button>
        </form>
      </div>

      {/* Right Section - Cart Summary */}
      <div className="md:w-1/3">
        <CartTotal data={getCartAmount()} />
      </div>
    </div>
  );
}

export default Placeorder;
