import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Zap } from "lucide-react";
import Cartitem from "../Componets/Cartitem";
import { useCart } from "../Context/Cardcontext";

const Card = () => {
  const { cartCount, cartTotal, cart } = useCart();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const gst = subtotal * 0.18;

  const total = subtotal + gst;
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <Link
            to="/"
            className="flex items-center text-gray-400 hover:text-orange-400 transition font-semibold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            Back to Store
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          Shopping Cart ({cartCount})
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT SIDE - ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-lg">Your cart is empty</p>
            ) : (
              cart.map((item) => <Cartitem key={item.id} item={item} />)
            )}
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="lg:col-span-1 w-full max-w-full p-6 md:p-8 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 sticky top-24 h-fit">
            {/* Heading */}
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3 flex items-center gap-2">
              <span className="text-orange-400 text-xl">₹</span>
              Order Total
            </h3>

            {/* Price Details */}
            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between text-lg">
                <span>SubTotal:</span>
                <span className="font-semibold text-white">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-lg">
                <span>GST:</span>
                <span className="font-semibold text-white">
                  ₹{gst.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Shipping (Express):</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>

              <div className="flex justify-between pt-5 border-t border-gray-700">
                <span className="text-xl font-bold text-white">
                  Estimated Total:
                </span>
                <span className="text-xl font-bold text-orange-400">
                  ₹{total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Button */}
            <Link
              to="/checkout"
              className="w-full mt-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-full shadow-md hover:bg-orange-700 transition flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <Zap className="w-5 h-5" />
              Proceed Securely
            </Link>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 text-center mt-4">
              All transactions are encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
