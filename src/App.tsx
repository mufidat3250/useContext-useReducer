import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Display from './Components/Display'
import Control from './Components/Controls'
import {useCounter} from './context'

function App() {
  const {state, dispatch} = useCounter()

  return (
    <div className="App">
        <Display {...state}/>
        <Control handler = {dispatch}/>
    </div>
  )
}

export default App
