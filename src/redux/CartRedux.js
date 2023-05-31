import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;  
      state.products.push(action.payload);
    },
    removeCart: (state, action) => {
      const restCartItems = state.products.filter((x)=>x.id !== action.payload.id)
      state.products = restCartItems;
      state.quantity -= 1;
    },
  },
});

export const { addProduct, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
