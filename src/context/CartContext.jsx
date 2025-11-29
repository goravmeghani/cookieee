import { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ).filter(item => item.quantity > 0), // remove if quantity is 0
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'LOAD_CART':
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  items: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cookie-cart');
      if (savedCart) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
      }
    } catch (error) {
      console.error("Could not load cart from localStorage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cookie-cart', JSON.stringify(state));
  }, [state]);

  const addItem = (item, quantity) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const cartCount = state.items.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartState: state, addItem, removeItem, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
