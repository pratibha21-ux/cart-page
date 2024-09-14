 "use client";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyDiscount } from '@/Redux/store/cartSlice';

const PromoCodeInput = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const applyCode = () => {
    // Example promo code logic
    if (code === 'DISCOUNT10') {
      dispatch(applyDiscount(10));
    } else {
      alert('Invalid code');
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter promo code"
        className="border p-2 w-full"
      />
      <button onClick={applyCode} className="mt-2 w-full bg-gray-200 py-2">
        Apply
      </button>
    </div>
  );
};

export default PromoCodeInput;
