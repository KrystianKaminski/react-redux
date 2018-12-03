const INITIAL_STATE = {
    cartTotal: 0
}

const ADD_CART = 'ADD_CART'


export const addPrice = price => ({
    type: ADD_CART,
    price
})



export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case ADD_CART:
            return {cartTotal: state.cartTotal + action.price}
        default:
            return state
    }
}