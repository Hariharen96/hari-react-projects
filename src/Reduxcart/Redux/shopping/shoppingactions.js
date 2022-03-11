import * as shoppingtypes from './shoppingtypes'

export const addtocart = (itemId) => {
    return {
        type: shoppingtypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const deletefromcart = (itemId) => {
    return {
        type: shoppingtypes.DELETE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustqty = (itemId, value) => {
    return {
        type: shoppingtypes.ADJUST_QUANTITY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}

export const loadcurrentitem = (item) => {
    return {
        type: shoppingtypes.LOAD_CURRENT_QUANTITY,
        payload: item
    }
}