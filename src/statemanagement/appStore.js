import { configureStore } from "@reduxjs/toolkit"
import { appReducer } from "./appReducer"
//registering the appReducer with reduxjs/toolkit
export const appStore = configureStore({
    reducer: {
        appReducer
    }
})