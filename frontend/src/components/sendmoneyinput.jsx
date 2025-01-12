
export function AmountField({placeholder, label, onChange}){
    return <div>
        <div className="text-left ml-2 mt-3">
          {label}
        </div>
        <input onChange={onChange} type='text' placeholder={placeholder} className='border border-black w-72 rounded pl-3 pt-1 pb-1 block mt-1' ></input>
  </div>
}