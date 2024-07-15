import React, { useEffect, useRef } from 'react'

const InputValueDisplay = () => {

    let id=useRef()
    let user=useRef()


const hndledata=()=>{
    console.log(id.current.value);
    console.log(user.current.value)
    
}

  return (
    <div>
      <h2>InputValue</h2>
        <input type="number"  ref={id}/>
        <input type="text" ref={user} />
        <button onClick={hndledata}>submit</button>
    </div>
  )
}

export default InputValueDisplay