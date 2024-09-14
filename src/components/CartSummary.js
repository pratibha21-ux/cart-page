import { useSelector } from 'react-redux';

const CartSummary = () => {
  const { items, shipping, discount } = useSelector((state) => state.cart);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shipping - discount;

  return (
    <div className="border p-4">
      <h3 className="font-semibold text-lg">Cart Summary</h3>
      <div className="mt-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>${shipping.toFixed(2)}</p>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <p>Discount</p>
            <p>-${discount.toFixed(2)}</p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">${total.toFixed(2)}</p>
        </div>
        <button className="mt-4 w-full bg-black text-white py-2">Checkout</button>
      </div>
    </div>
  );
};

export default CartSummary;
