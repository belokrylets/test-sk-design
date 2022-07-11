import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { formSlice } from "../store/redusers/formSlice";
import { validationSlice } from "../store/redusers/validationSlice";

const ProfileLinkInput = () => {
    const dispatch = useAppDispatch()

    const { handleInput } = formSlice.actions;
    const { changeProfileLinkDirty, changeProfileLinkError } = validationSlice.actions;

    const { dirty, errorValidation } = useAppSelector(state => state.validationReduser)

    const { profileLink } = useAppSelector(state => state.formReduser.formData)

    const handleChangeProfileLinkInput = (e: { target: { name: string; value: string; }; }) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleInput({ name, value }));
        if (value.length < 2) {
            dispatch(changeProfileLinkError('Поле более 2 символов'))
        } else {
            dispatch(changeProfileLinkError(''))
        }
    }

    const blurHandler = (e: { target: { name: string; }; }) => {
        switch (e.target.name) {
            case 'profileLink':
                dispatch(changeProfileLinkDirty())
                break;
        }
    }

    return (
        <div className='text-input-profileLink'>
            <input
                className={cn("input-profileLink", { 'input-profileLink-red': dirty.profileLinkDirty && !!errorValidation.profileLinkError })}
                onBlur={() => dispatch(changeProfileLinkDirty())}
                onChange={handleChangeProfileLinkInput}
                type="text"
                placeholder='instagram.com/skde…'
                id='profileLink'
                name='profileLink'
                value={profileLink} />
            <label
                className={cn("label-profileLink", { 'label-profileLink-red': dirty.profileLinkDirty && !!errorValidation.profileLinkError })}>
                Ссылка на профиль *
            </label>
            {(dirty.profileLinkDirty && errorValidation.profileLinkError) && <div className="errorValidation">{errorValidation.profileLinkError}</div>}
        </div>
    )
}

export default ProfileLinkInput