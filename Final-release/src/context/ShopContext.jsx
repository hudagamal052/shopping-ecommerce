//huda
import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id);
        if (exists) {
            setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const updateProductAmount = (id, quantity) => {
        if (quantity < 1) return;
        setCart(cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const resetCart = () => {
        setCart([]);
    };

    const addToFavorite = (product) => {
        if (!favorites.find((item) => item.id === product.id)) {
            setFavorites([...favorites, product]);
        }
    };
    const removeFromFavorite = (id) => {
        setFavorites(favorites.filter((item) => item.id !== id));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    return (
        <ShopContext.Provider
            value={{
                cart,
                favorites,
                addToCart,
                removeFromCart,
                updateProductAmount,
                resetCart,
                addToFavorite,
                removeFromFavorite,
                getTotalPrice,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);
