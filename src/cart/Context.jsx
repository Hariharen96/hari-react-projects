import React, { useContext, useEffect, useReducer, useState } from 'react'
import cartdata from './cartdata'
import reducer from './reducer'



const AppContext = React.createContext()


const initialState = {
    loading: false,
    cart:cartdata,
    total: 0,
    amount: 0,
};


const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }
    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }

   
    useEffect(()=>{
        dispatch({ type: 'GET_TOTALS' })
    },[state.cart])
    
    return (
        <AppContext.Provider value= {{ ...state , clearCart,removeItem, increase,decrease}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
