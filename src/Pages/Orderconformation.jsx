import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

// ✅ FIX: Component name SAME rakha (Orderconformation)
const Orderconformation = ({ deliveryDetails }) => {
  return (
    <div className="container mx-auto md:px-8 pt-12">
      <div className='p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700 text-white'>
        
        <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg' />
        
        <h2 className='text-4xl font-extrabold mb-4'>
          Order Confirmed!
        </h2>

        <p className='text-lg text-gray-300 mb-6'>
          Your transaction is complete.
        </p>

        {/* ✅ FIX: Safe optional chaining */}
        <div className='p-6 bg-green-900/30 border border-green-700 rounded-xl text-sm'>
          <p className='font-semibold text-lg mb-1'>
            {deliveryDetails?.name}
          </p>
          <p>{deliveryDetails?.address}</p>
          <p>{deliveryDetails?.city}, {deliveryDetails?.zip}</p>
        </div>

        <Link
          to="/"
          className="mt-10 px-6 py-3 bg-orange-600 rounded-full block"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default Orderconformation