import { configureStore } from "@reduxjs/toolkit";
import MyBroject from "./redux"
export const store = configureStore({
    reducer: {
        projects: MyBroject
    }
})