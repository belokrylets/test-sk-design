import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { formSlice } from "../store/redusers/formSlice";
import { listCities } from '../data/cities'
import { validationSlice } from "../store/redusers/validationSlice";
import cn from "classnames";

interface ICities {
    id: string;
    name: string;
}
interface SelectCitiesProps {
    label: string;
    option: ICities[]
}
const SelectCities = ({ label, option }: SelectCitiesProps) => {
    const dispatch = useAppDispatch()

    const { handleSelect } = formSlice.actions;
    const { changeCitiesDirty, changeCitiesError } = validationSlice.actions;

    const { dirty, errorValidation } = useAppSelector(state => state.validationReduser)
    const { cities } = useAppSelector(state => state.formReduser.formData)

    const handleChangeCities = (e: { target: { name: string; value: string; }; }) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleSelect({ name, value }));
        if (!value || value === 'Выберите город *') {
            dispatch(changeCitiesError('Обязательное поле'))
        } else {
            dispatch(changeCitiesError(''))
        }
    }

    return (
        <div className='select'>
            <select className={cn({'select-red': dirty.citiesDirty && !!errorValidation.citiesError, 'selectLabel-red': dirty.citiesDirty && !!errorValidation.citiesError})} name="cities" onChange={handleChangeCities} onBlur={() => dispatch(changeCitiesDirty())} value={cities}>
                <option className="select__item" value='Выберите город *'>Выберите город *</option>
                {listCities.map(({ id, name }) => (
                    <option key={id} className="select__item" value={name}>{name}</option>
                ))}
            </select>
            <label className='selectLabel'>
                Выберите город *
            </label>
            {(dirty.citiesDirty && errorValidation.citiesError) && <div className="errorValidation">{errorValidation.citiesError}</div>}

        </div>
    )
}

export default SelectCities