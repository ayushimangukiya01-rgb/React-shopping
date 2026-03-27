import React from "react";
import { useCart } from "../Context/Cardcontext";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const Cartitem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => {
  if (item.quantity >= item.stock) {
    toast.error("Out of Stock ❌");
    return;
  }
  addToCart(item);        
};
  const decreaseQ = () => removeFromCart(item.id);

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between 
      p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl 
      border border-gray-800 transition duration-300 hover:border-orange-600/50"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700"
        />

        <div className="grow">
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {item.name}
          </h3>

          <p className="text-lg text-orange-400 font-semibold">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 mt-4 sm:mt-0 gap-4">
        
        {/* QUANTITY CONTROL */}
        <div className="flex items-center border border-gray-700 rounded-full overflow-hidden shadow-md bg-gray-800">
          
          <button
            onClick={decreaseQ}
            disabled={item.quantity <= 1}
            className={`flex items-center justify-center w-10 h-10 text-lg font-bold transition
            ${
              item.quantity <= 1
                ? "opacity-30 cursor-not-allowed"
                : "text-gray-300 hover:bg-red-500/20 hover:text-red-400"
            }`}
          >
            −
          </button>

          <span className="px-4 text-base font-semibold text-white">
            {item.quantity}
          </span>

          <button
          // disabled={item.quantity >= item.stock}
            onClick={increaseQ}
            className="flex items-center justify-center w-10 h-10 text-lg font-bold 
            text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition active:scale-90"
          >
            +
          </button>
        </div>

        {/* TOTAL PRICE */}
        <p className="font-extrabold text-orange-300 w-24 text-right hidden md:block">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>   

        {/* REMOVE BUTTON */}
        <button
          onClick={() => removeFromCart(item.id, true)}
          className="p-3 bg-red-800/20 text-red-400 rounded-full 
          hover:bg-red-800/40 transition duration-150 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>    
    </div>
    
  );
};

export default Cartitem;