import type { State } from '../context'
const Display = ({count}:State) => {
  return (
    <div className='display'>{count}</div>
  )
}

export default Display