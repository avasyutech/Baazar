import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return JSON.parse(storedCart) || [];
  });
  const [cartValue, setCartValue] = useState(() => {
    const storedCartValue = localStorage.getItem('cartValue');
    return parseInt(storedCartValue, 10) || 0;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartValue', cartValue.toString());
  }, [cart, cartValue]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
      setCartValue(cartValue);
    } 
    else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setCartValue(cartValue + 1);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id != itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", updatedCart);
    setCartValue(cartValue - 1);
  };

  const decrementCartValue = (itemId) => {
    const existingItem = cart.find((cartItem) => cartItem.id === itemId);

    if (existingItem && existingItem.quantity > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCart(updatedCart);
    } 
    else {
      removeFromCart(itemId);
      setCartValue(cartValue - 1);
    }
  };

  const values = { cart, cartValue, setCart, setCartValue, addToCart, removeFromCart, decrementCartValue };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
