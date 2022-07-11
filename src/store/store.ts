import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formReduser from "./redusers/formSlice";
import validationReduser from "./redusers/validationSlice";

const rootReduser = combineReducers({
    formReduser,
    validationReduser,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];