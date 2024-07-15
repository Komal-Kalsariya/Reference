import React, { useState } from 'react'

const FormDisplay = () => {
 
    
  return (
    <>
    <h2>FromDisplay</h2>
    <form action="">
     <div>
     <label>Name:</label>
       <input type="text" placeholder='enter name' />
       <label>Email:</label>
       <input type="email" placeholder='enter email'/>
       <label>Bio:</label>
       <input type="text" placeholder='enter bio'/>
     </div>
       <div>
        <button>submit</button>
       </div>
       
    </form>
    </>
  )
}

export default FormDisplay