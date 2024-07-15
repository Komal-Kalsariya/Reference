import React, { useEffect, useRef } from 'react'

const AutoFocusInput = () => {
    

    let name=useRef()


const hndledata=()=>{
  
    console.log(name.current.value)
    
}
useEffect(()=>{
  name.current.focus()
})
  return (
    <div>
       
       <h2>Autofocus</h2>
        <input type="text" ref={name} />
        <button onClick={hndledata}>submit</button>
    </div>
  )
  
}

export default AutoFocusInput