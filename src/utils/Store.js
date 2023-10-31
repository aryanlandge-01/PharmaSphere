import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import itemReducer from "./ItemSlice"



const Store = configureStore(
    {
        reducer: {
            user: userReducer,
            Items: itemReducer,
        }
    }
)

export default Store;