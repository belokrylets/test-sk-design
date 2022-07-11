import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IValidation } from "../../types/validationType";

const initialState: IValidation = {
    dirty: {
        nameDirty: false,
        phoneDirty: false,
        mailDirty: false,
        profileLinkDirty: false,
        citiesDirty: false
    },
    errorValidation: {
        nameError: 'Обязательное поле',
        phoneError: 'Обязательное поле',
        mailError: 'Обязательное поле',
        profileLinkError: 'Обязательное поле',
        citiesError: 'Обязательное поле'
    }
}

export const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        changeNameDirty(state) {
            state.dirty.nameDirty = true
        },
        changePhoneDirty(state) {
            state.dirty.phoneDirty = true
        },
        changeMailDirty(state) {
            state.dirty.mailDirty = true
        },
        changeProfileLinkDirty(state) {
            state.dirty.profileLinkDirty = true
        },
        changeCitiesDirty(state) {
            state.dirty.citiesDirty = true
        },
        changeNameError (state, action: PayloadAction<string>) {
            state.errorValidation.nameError = action.payload
        },
        changeMailError (state, action: PayloadAction<string>) {
            state.errorValidation.mailError = action.payload
        },
        changeProfileLinkError (state, action: PayloadAction<string>) {
            state.errorValidation.profileLinkError = action.payload
        },
        changePhoneError (state, action: PayloadAction<string>) {
            state.errorValidation.phoneError = action.payload
        },
        changeCitiesError (state, action: PayloadAction<string>) {
            state.errorValidation.citiesError = action.payload
        },
    }
})

const validationReduser = validationSlice.reducer;
export default validationReduser;