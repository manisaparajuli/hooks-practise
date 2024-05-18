import React, { useState } from 'react'

function HookCounter() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementByFive = () => {
    for(let i = 0 ; i< 5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      <h2>Counter program</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={() => incrementByFive()}>Increment by 5</button>
    <br />
    </div>
  )
}

export default HookCounter