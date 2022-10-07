import { createContext, ReactNode, useContext, useReducer } from "react";
const initialState = {count:0}

//types
export type State = typeof initialState 
export type ActionType = 'increment' | 'decrement'
export type Dispatch =(action:ActionType)=> void 
const context = createContext<{state:State, dispatch:Dispatch }|undefined>(undefined)

const counterReducer = (state:State, action:ActionType)=>{
    switch (action) {
        case 'increment':            
        return {
            count: state.count +1
        }
        case 'decrement':
            return {
            count:state.count -1
            }
    }
}

const CounterProvider =({children}:{children:ReactNode})=>{
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return <context.Provider value={{state, dispatch}}>
            {children}
    </context.Provider>
}
export default CounterProvider

// hooks
export const useCounter = ()=>{
    let newcontext = useContext(context)

    if(!newcontext) throw Error ('Use counter must be used inside Counter Provider')

    return newcontext
}