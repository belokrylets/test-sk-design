import { uniqueId } from "lodash";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { formSlice } from "../store/redusers/formSlice";

interface SelectProps {
    label: string;
    option: string[]
}
const SelectSourses = ({ label, option }: SelectProps) => {
    const { handleSelect } = formSlice.actions;
    const dispatch = useAppDispatch()
    const { sourses } = useAppSelector(state => state.formReduser.formData)

    const handleChangeSourses = (e: { target: { name: string; value: string; }; }) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleSelect({ name, value }));
    }

    return (
        <div className='select'>
            <select name="sourses" onChange={handleChangeSourses} value={sourses}>
                <option className="select__item" value="От куда узнали про нас?">{label}</option>
                {option.map((opt) => (
                    <option key={uniqueId()} className="select__item" value={opt}>{opt}</option>
                ))}
            </select>
            <label className='selectLabel'>
                {label}
            </label>
        </div>
    )
}

export default SelectSourses