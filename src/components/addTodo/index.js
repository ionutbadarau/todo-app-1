import { useState } from "react"

function AddTodo({onAdd}) {
  const [val, setVal] = useState('');
  return (
    <div>
      <input type="text" onChange={e => setVal(e.target.value)} value={val} />
      <button onClick={() => onAdd(val)}>Add todo</button>
    </div>
  )
}

export default AddTodo;