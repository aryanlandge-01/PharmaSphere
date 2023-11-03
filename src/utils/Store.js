import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import itemReducer from "./ItemSlice";
import cartReducer from "./CartSlice";



const Store = configureStore(
    {
        reducer: {
            user: userReducer,
            Items: itemReducer,
            Cart: cartReducer,
        }
    }
)

export default Store;