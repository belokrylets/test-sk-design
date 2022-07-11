import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { formSlice } from "../store/redusers/formSlice";
import { validationSlice } from "../store/redusers/validationSlice";

const NameInput = () => {
    const dispatch = useAppDispatch()

    const { handleInput } = formSlice.actions;
    const { changeNameDirty, changeNameError } = validationSlice.actions;

    const { dirty, errorValidation } = useAppSelector(state => state.validationReduser)

    const { name } = useAppSelector(state => state.formReduser.formData)

    const handleChangeNameInput = (e: { target: { name: string; value: string; }; }) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleInput({ name, value }));
        if (value.length < 2) {
            dispatch(changeNameError('Поле более 2 символов'))
        } else {
            dispatch(changeNameError(''))
        }
    }

    return (
        <div className='text-input-name'>
            <input
                className={cn("input-name", { 'input-name-red': dirty.nameDirty && !!errorValidation.nameError })}
                onBlur={() => dispatch(changeNameDirty())}
                onChange={handleChangeNameInput}
                type="text"
                placeholder='Иван'
                id='name'
                name='name'
                value={name}
            />
            <label
                className={cn("label-name", { 'label-name-red': dirty.nameDirty && !!errorValidation.nameError })}>
                Ваше имя *
            </label>
            {(dirty.nameDirty && errorValidation.nameError) && <div className="errorValidation">{errorValidation.nameError}</div>}
        </div>
    )
}

export default NameInput