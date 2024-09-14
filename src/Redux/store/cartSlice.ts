import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  total: number;
}

const initialState: CartState = {
  items: [
    { id: 1, name: 'Airbogat Sneakers', price: 80, quantity: 1, subtotal: 80 },
    { id: 2, name: 'Luxury Kano Shoes', price: 80, quantity: 1, subtotal: 80 }
  ],
  shipping: 0,
  total: 160,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.subtotal = item.quantity * item.price;
        state.total += item.price;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.subtotal = item.quantity * item.price;
        state.total -= item.price;
      }
    },
    applyShipping: (state, action: PayloadAction<number>) => {
      state.shipping = action.payload;
      state.total = state.items.reduce((acc, item) => acc + item.subtotal, 0) + state.shipping;
    }
  },
});

export const { increaseQuantity, decreaseQuantity, applyShipping } = cartSlice.actions;
export default cartSlice.reducer;


