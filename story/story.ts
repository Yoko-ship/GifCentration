import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./gifStory"
export const makeStore = () =>{
    return configureStore({
        reducer:{gifReducer}
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']