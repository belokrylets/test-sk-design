import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForm } from "../../types/formType";

const initialState: IForm = {
    formData: {
        name: '',
        phone: '',
        mail: '',
        profileLink: '',
        cities: '',
        organization: '',
        Recipient: '',
        sourses: '',
    },
    isShowAdditional: false
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        handleInput(state, action: PayloadAction<{name: string, value: string}>) {
            const {name, value} = action.payload
            state.formData[name] = value;
        },
        handleSelect(state, action: PayloadAction<{name: string, value: string}>) {
            const {name, value} = action.payload
            state.formData[name] = value;
        },
        showAddition (state) {
            state.isShowAdditional = !state.isShowAdditional;
        },
        clearingForm (state) {
            state.formData = initialState.formData;
            state.isShowAdditional = false
        }  
    }
})

const formReduser = formSlice.reducer;
export default formReduser;