import { createContext, useContext, useState, useMemo } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { initialProducts } from "../Data/Product"; // ✅ match with your project

const CartContext = createContext();

export const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ products global
  const products = initialProducts;

  // ✅ ADD TO CART
  const addToCart = (product) => {
    if (!product) return;

    toast.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ✅ REMOVE FROM CART
  const removeFromCart = (productId, removeAll = false) => {
    toast.success("Item Removed", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }

      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // ✅ CLEAR CART
  const clearCart = () => setCart([]);

  // ✅ TOTAL ITEMS
  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  // ✅ TOTAL PRICE
  const cartTotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}

      {/* ✅ Toast container (IMPORTANT) */}
      <ToastContainer />
    </CartContext.Provider>
  );
};

// ✅ custom hook
export const useCart = () => useContext(CartContext);