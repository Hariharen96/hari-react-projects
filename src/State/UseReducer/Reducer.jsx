import React, { useReducer } from 'react'

const initialState = {
    counter: 0
};

const reducer = (state,action) => {
    switch(action.type){
        case 'Increment':
            return { counter: state.counter + action.value }
        case 'Decrement':
            return { counter: state.counter - action.value } 
        default:
            return state
        }
}

const Reducer = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {state.counter}
            <button onClick = {()=> dispatch({ type: 'Increment', value: 5 })}>Increment</button>
            <button onClick={()=>dispatch({ type: 'Decrement', value:5 })}>Decrement</button>
        </div>
    )
}

export default Reducer
