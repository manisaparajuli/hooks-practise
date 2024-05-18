import React, { useState } from 'react'

const ArrayuseState = () => {
  const [num, setNum] = useState([])
  const addRandomNumber = () => {
    setNum([...num, {
      id : num.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  return (
    <div>
      <hr />
      <button onClick={addRandomNumber}>Add Random number</button>
      <ul>
        {num.map(n => (
          <li key = {n.id}>{n.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayuseState
