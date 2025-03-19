import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        {/* Success Icon */}
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto animate-bounce" />

        {/* Order Confirmed Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Order Confirmed!
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for shopping with us. Your order has been successfully placed and will be delivered soon.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 p-4 mt-4 rounded-lg border text-left">
          <p className="text-gray-700">
            <span className="font-semibold">Order ID:</span> #123456
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Estimated Delivery:</span> 3-5 Business Days
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Payment Method:</span> Online Payment
          </p>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-900 transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
