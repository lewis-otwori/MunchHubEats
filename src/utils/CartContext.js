import React, { createContext, useContext, useEffect, useReducer} from 'react';

const CartContext = createContext();

const initialState = {
    cartItems: [],
}

const cartReducer = ( state, action) => {
    switch (action.type) {
        case "INITIALIZE_CART":
            return {...state, cartItems: action.payload};

        // Add to cart state management
        case "ADD_TO_CART":
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);

            if (existingItem) {
                const updatedItems = state.cartItems.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item);
                return {...state, cartItems: updatedItems}
            } else {
                const newItem = {...action.payload, quantity: 1};
                return {...state, cartItems: [...state.cartItems, newItem]};
            }
        
        // Remove from cart state management
        case "REMOVE_FROM_CART":
            const updatedItems3 = state.cartItems.filter(item => item.id !== action.payload.id);
            return {...state, cartItems: updatedItems3};

        // Item quantity increment state management
        case "INCREMENT_QUANTITY":
            const updatedItems = state.cartItems.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item);
            return {...state, cartItems: updatedItems};
            
            
        // Item quantity increment state management
        case "DECREMENT_QUANTITY":
            const updatedItems2 = state.cartItems.map(item => item.id === action.payload.id? {...item, quantity: item.quantity - 1} : item);
            // Removes items with quantity zero
            const itemsWithoutZeroQuantity = updatedItems2.filter(item => item.quantity > 0);
            return {...state, cartItems: itemsWithoutZeroQuantity};
            
        default:
            return state;
        }
};

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load cart items from localStorage on app init
    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            dispatch({
                type: "INITIALIZE_CART",
                payload: parsedCart
            })
        }
    }, []);

    useEffect( () => {
        // Save cart items to localStorage whenever the cart changes
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }, [state.cartItems])

    return (
        <CartContext.Provider value={{cartState: state, cartDispatch: dispatch}}>
            {children}
        </CartContext.Provider>
    );
    };

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export {CartProvider, useCart};