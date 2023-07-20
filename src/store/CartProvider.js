import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items : [],
    totalAmount: 0, 
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD'){
        const existItemIndex = state.items.findIndex((item) => action.item.id === item.id)
        let updatedItems;
        if (existItemIndex != -1){
            const updatedItem = {
                ...state.items[existItemIndex],
                amount: action.item.amount + state.items[existItemIndex].amount,    
            };
            updatedItems = [...state.items];
            updatedItems[existItemIndex] = updatedItem;
        }
        else{
            updatedItems = [...state.items,action.item]
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if (action.type === 'REMOVE') {
        let updatedItems;
        console.log(action.id)
        const removedItemIndex = state.items.findIndex((item) => action.id === item.id);
        const removeItem = state.items[removedItemIndex];
        if (removeItem.amount > 1){
            const updatedItem = {
                ...state.items[removedItemIndex],
                amount: state.items[removedItemIndex].amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[removedItemIndex] = updatedItem;
        }
        else if (removeItem.amount === 1){
            updatedItems = state.items.filter((item) => item.id !== action.id);
        }
        const uodatedTotalAmount = state.totalAmount - removeItem.price;

        return {
            items: updatedItems,
            totalAmount: uodatedTotalAmount,
        }
    }

    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item})
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE' , id: id})
    };

    const cartContext = {
        items:  cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;