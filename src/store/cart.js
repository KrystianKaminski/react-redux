

const ADD_CART = 'ADD_CART'


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
           return [...state, action.item]
        default:
            return state
    }
}