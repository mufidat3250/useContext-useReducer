import React from 'react'
import type { Dispatch } from '../context'
const Controls = ({handler}:{handler:Dispatch}) => {
  return (
    <div  className='controls'>
      <button onClick={()=> handler('increment')} >+</button>
      <button onClick={()=>handler('decrement')} >-</button>
    </div>
  )
}

export default Controls