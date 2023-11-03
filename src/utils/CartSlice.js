import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "Cart",
    initialState: {
       Itemsadded : [],
    },
    reducers: {
        addItem:(state,action) => {
            state.Itemsadded.push(action.payload);
        },
        removeItem: (state, action) => {
            state.Itemsadded.pop(action.payload);
        },
    }
});

export const { addItem ,removeItem} = CartSlice.actions;

export default CartSlice.reducer;