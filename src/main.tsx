import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  CounterProvider  from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <CounterProvider>
         <App />
    </CounterProvider>

)
