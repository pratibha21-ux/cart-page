"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../Redux/store/store';
import { increaseQuantity, decreaseQuantity, applyShipping } from '../../Redux/store/cartSlice';
import styles from './CartPage.module.css'; 

const CartPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, shipping, total } = useSelector((state: RootState) => state.cart);

  const handleQuantityIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleQuantityDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleShippingChange = (shippingCost: number) => {
    dispatch(applyShipping(shippingCost));
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.heading}>Cart</h1>
      <div className={styles.shippingInfo}>
        <p>Shop for $34 more to enjoy <span>FREE Shipping</span></p>
      </div>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className={styles.cartdetails}>
              {/* <img src={product.image} alt={item.name} /> */}
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleQuantityDecrease(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => handleQuantityIncrease(item.id)}>+</button>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${item.subtotal.toFixed(2)}</td>
            </tr>
           
          ))}
        
        </tbody>
      </table>
      <div className={styles.checkoutSection}>
        <div className={styles.coupon}>
          <p>Have a coupon?</p>
          <input type="text" placeholder="Add your code here" />
          <button>Apply</button>
        </div>
       
        <div className={styles.cartSummary}>
          <h3>Cart Summary</h3>
          <div className={styles.shippingOptions}>
            <label className=''>
              <input type="radio" name="shipping" defaultChecked />
              Free shipping
              <p>$0.00</p>
            </label>
          
            <label>
              <input type="radio" name="shipping" />
              Express shipping
              <p>$15.00</p>
            </label>
           
          </div>
          <div className={styles.total}>
            <div className={styles.totalCart}>
            <p>Subtotal: </p>
            <p>${total - shipping}</p>

            </div>
            <div className={styles.totalCart}>
             <p>Total:</p>
             <p>${total}</p>
            </div>
          </div>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
        </div>
    </div>
  );
};

export default CartPage;
