import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/todoReducer";

const store = configureStore({
    reducer: {
           todos:todoReducer,
    },
});

export default store;