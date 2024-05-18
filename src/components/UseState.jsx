import React, { useState } from 'react'


function UseState() {
  const [name, setName] = useState({firstName: "" , lastName: ""})
  return (
    <div>
      <p>UseState hooks implementation on object</p>
      <hr />
      <p>Enter Your full Name</p>
      <input 
        type="text" 
        value={name.firstName}
        onChange={e => setName({...name, firstName:  e.target.value})}
        placeholder='Enter Your First Name'
      />
      <input 
        type="text" 
        value={name.lastName}
        onChange={e => setName({...name, lastName:  e.target.value})}
        placeholder='Enter Your Last Name'
      />
      <p>Your first name is - {name.firstName}</p>
      <p>Your last name is - {name.lastName}</p>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default UseState