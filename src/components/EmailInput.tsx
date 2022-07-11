import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { formSlice } from "../store/redusers/formSlice";
import { validationSlice } from "../store/redusers/validationSlice";

const EmailInput = () => {
    const dispatch = useAppDispatch()

    const { handleInput } = formSlice.actions;
    const { changeMailDirty, changeMailError } = validationSlice.actions;

    const { dirty, errorValidation } = useAppSelector(state => state.validationReduser)

    const { mail } = useAppSelector(state => state.formReduser.formData)

    const handleChangeMailInput = (e: { target: { name: string; value: string; }; }) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleInput({ name, value }))
        const re = /.+@.+\..+/i
        if (!re.test(String(value).toLowerCase())) {
            dispatch(changeMailError('Некорректный емэйл'))
        } else {
            dispatch(changeMailError(''))
        }
    }

    const blurHandler = (e: { target: { name: string; }; }) => {
        switch (e.target.name) {
            case 'mail':
                dispatch(changeMailDirty())
                break;
        }
    }

    return (
        <div className='text-input-mail'>
            <input
                className={cn("input-mail", { 'input-mail-red': dirty.mailDirty && !!errorValidation.mailError })}
                onBlur={() => dispatch(changeMailDirty())}
                onChange={handleChangeMailInput}
                type="text"
                placeholder='example@skdesign.ru'
                id='mail'
                name='mail'
                value={mail}
            />
            <label className={cn("label-mail", { 'label-mail-red': dirty.mailDirty && !!errorValidation.mailError })}>
                E-mail *
            </label>
            {(dirty.mailDirty && errorValidation.mailError) && <div className="errorValidation">{errorValidation.mailError}</div>}
        </div>
    )
}

export default EmailInput