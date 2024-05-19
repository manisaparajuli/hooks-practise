import React, { useEffect, useState } from 'react'

function TimerUseEffect() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () =>{
      clearInterval(interval)
    }
  }, [count])

  return (
    <div>
      <hr />
      <p>COunter</p>
      {count}
    </div>
  )
}

export default TimerUseEffect