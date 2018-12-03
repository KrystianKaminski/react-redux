

const ADD_CART = 'ADD_CART'

const INITIAL_STATE = {
    cartTotal: 0,
    items: []
}


export const addToCart = (title, price) => ({
    type: ADD_CART,
    item: {
        title,
        price
    }
})



export default (state = [], action) => {

    switch(action.type) {
        case ADD_CART:
           return{
               ...state,
               items: [...state.items, action.item],
               cartTotal: (state.cartTotal + action.item.price)
           }
        default:
            return state
    }
}