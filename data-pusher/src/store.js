import { configureStore } from "@reduxjs/toolkit";
import slice from './Features/Slice';

const store = configureStore({
    reducer: {
        user:slice
    },
});

export default store;