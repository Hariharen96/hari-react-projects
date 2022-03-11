const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: [] }
    }
    if (action.type === 'REMOVE_ITEM') {
        return {...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItems) => {
            if (cartItems.id === action.payload) {
                return {...cartItems, amount: cartItems.amount + 1 }
            }
            return cartItems
        })
        return {...state, cart: tempCart }
    }


    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItems) => {
            if (cartItems.id === action.payload) {
                return {...cartItems, amount: cartItems.amount - 1 }
            }
            return cartItems
        }).filter((CartItems) => CartItems.amount !== 0)
        return {...state, cart: tempCart }
    }

    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { amount, price } = cartItem;
            const itemTotal = amount * price
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, {
            total: 0,
            amount: 0,
        })

        total = parseFloat(total.toFixed(2))
        return {...state, total, amount }
    }
    return state

}

export default reducer