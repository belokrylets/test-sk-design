import cn from 'classnames'
import { sourses } from '../data/sources'
import up from '../media/images/up.svg'
import down from '../media/images/down.svg'
import BigInput from './BigInput'
import SelectSourses from './SelectSourses'
import { formSlice } from '../store/redusers/formSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

const AdditionalFields = () => {
    const dispatch = useAppDispatch()

    const { showAddition } = formSlice.actions;
    const { isShowAdditional, formData } = useAppSelector(state => state.formReduser)

    return (
        <div className='AdditionalFields'>
            <div className="headerAdditionalFields"  onClick={() => dispatch(showAddition())}>
                <div className="textHeader">
                    Скрыть дополнительные поля
                </div>
                <div className="logoHeader">
                    <img src={isShowAdditional ? up : down} alt="" />
                </div>
            </div>
            <div className={cn('formAdditional', 'hidden', { shown: isShowAdditional })}>
                <BigInput label='Получатель' placeholder='ФИО' name={'Recipient'} value={formData.Recipient} />
                <SelectSourses label={'От куда узнали про нас?'} option={sourses} />
            </div>

        </div>
    )
}

export default AdditionalFields