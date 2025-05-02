import React, { useRef } from 'react'

function NewComponent() {

    const [values, setValues] = useState([]);
    const inputref = useRef();

    const addValue = ()=> {
        setValues(prev=>[...prev, inputref.current.value])
    }

    const deleteValue = (val)=>{
        const newValues = values.filter((value)=>{
            return value!==val
        })
        setValues(newValues);
    }

  return (
    <div>
        <div>
            <h1>All values</h1>
            {values?.map((value, index)=>(
                <h1 onClick={()=>{deleteValue(value)}} >{value}</h1>
            ))}
        </div>
      <input type="text" ref={inputref}/>
      <button onClick={addValue} >ENTER</button>
    </div>
  )
}

export default NewComponent
