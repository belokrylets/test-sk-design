import React from 'react'
import { listCities } from '../data/cities'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { formSlice } from '../store/redusers/formSlice'
import AdditionalFields from './AdditionalFields'
import BigInput from './BigInput'
import EmailInput from './EmailInput'
import NameInput from './NameInput'
import SelectCities from './SelectCities'
import PhoneInput from './PhoneInput'
import ProfileLinkInput from './ProfileLinkInput'


const Form = () => {
  const dispatch = useAppDispatch();
  const { clearingForm } = formSlice.actions
  const { formData } = useAppSelector(state => state.formReduser)
  const { name, phone, mail, profileLink, organization, cities } = useAppSelector(state => state.formReduser.formData)
  const isDisabled = (): boolean => {
    return (!name || !phone || !mail || !profileLink || !cities)
  }

  const onSubmitt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setTimeout(() => {
      const data = JSON.stringify(formData, null, 2)
      console.log(data)
      dispatch(clearingForm())
    }, 2000);
  }

  return (
    <div className="form">
      <form>
        <NameInput />
        <PhoneInput />
        <EmailInput /> 
        <ProfileLinkInput/>
        <SelectCities label={'Выберите город *'} option={listCities} />
        <BigInput label={'Название организации/студии'} placeholder={'SK Design'} name={'organization'} value={organization} />
        <AdditionalFields />
        <button disabled={isDisabled()} onClick={(e) => onSubmitt(e)} className='formSubmit'>Отправить заявку</button>
      </form>
    </div>

  )
}

export default Form