import { createSlice } from "@reduxjs/toolkit";


const ItemSlice = createSlice({
    name: "Items",
    initialState: {
        Products: null,
    },
    reducers: {
        addProducts:(state,action) => {
            state.Products = action.payload;
        }
    }
});

export const {addProducts} = ItemSlice.actions;

export default ItemSlice.reducer;