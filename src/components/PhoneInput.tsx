import cn from "classnames";
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { formSlice } from '../store/redusers/formSlice';
import InputMask from "react-input-mask";
import { validationSlice } from '../store/redusers/validationSlice';


const PhoneInput = () => {
  const dispatch = useAppDispatch()

  const { handleInput } = formSlice.actions;
  const { changePhoneDirty, changePhoneError } = validationSlice.actions;

  const { dirty, errorValidation } = useAppSelector(state => state.validationReduser)

  const { phone } = useAppSelector(state => state.formReduser.formData)

  const handleChangePhoneInput = (e: { target: { name: string; value: string; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleInput({ name, value }));
    if (value.includes('_') || !value) {
      dispatch(changePhoneError('Обязательное поле'))
    } else {
      dispatch(changePhoneError(''))
    }
  }

  const blurHandler = (e: { target: { name: string; }; }) => {
    switch (e.target.name) {
      case 'phone':
        dispatch(changePhoneDirty())
        break;
    }
  }

  return (
    <div className='text-input-phone'>
      <InputMask
        mask={'+7 (999) 999-99-99'}
        className={cn("input-phone", { 'input-phone-red': dirty.phoneDirty && !!errorValidation.phoneError })}
        onBlur={() => dispatch(changePhoneDirty())}
        onChange={handleChangePhoneInput}
        type="text"
        placeholder='+7 (000) 000-00-00'
        id='phone'
        name='phone'
        value={phone}
      />
      <label
        className={cn("label-phone", { 'label-phone-red': dirty.phoneDirty && !!errorValidation.phoneError })}>
        Номер телефона *
      </label>
      {(dirty.phoneDirty && errorValidation.phoneError) && <div className="errorValidation">{errorValidation.phoneError}</div>}

    </div>
  )
}

export default PhoneInput