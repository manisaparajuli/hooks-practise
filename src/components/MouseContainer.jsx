import React, { useState } from 'react'
import Mouselog from './Mouselog'

function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <Mouselog/>}
    </div>
  )
}

export default MouseContainer