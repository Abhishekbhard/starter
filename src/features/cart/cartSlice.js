import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 3,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    remvoeItem: (state, action) => {
      console.log(action);
    },
  },
});
// console.log(cartSlice);
export const { clearCart, remvoeItem } = cartSlice.actions;

export default cartSlice.reducer;
