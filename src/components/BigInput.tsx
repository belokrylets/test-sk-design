import { useAppDispatch } from "../hooks/redux";
import { formSlice } from "../store/redusers/formSlice";

interface BigInputProps {
    label:string;
    placeholder: string;
    name: string;
    value: string;
  }
  const BigInput = ({label, placeholder, name, value}:BigInputProps) => {
    const { handleInput } = formSlice.actions;
    const dispatch = useAppDispatch()

    const handleChangeBigInput = (e: { target: { name: string; value: string; }; }) => {
      const name = e.target.name;
      const value = e.target.value;
      dispatch(handleInput({name, value}));
    }

  return (
    <div className='text-input-big'>
      <input className="input-big" onChange={handleChangeBigInput} type="text" placeholder={placeholder} id={name} name={name} value={value} />
      <label className="label-big" htmlFor="name">{label}</label>
    </div>
  )
  }
  
  export default BigInput