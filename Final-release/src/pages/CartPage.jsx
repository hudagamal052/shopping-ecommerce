//huda
import React from 'react';
import Cart from '../components/Cart';
import { useShop } from '../context/ShopContext';
const CartPage = () => {
    const { cart, removeFromCart, updateProductAmount, resetCart } = useShop();

    return (
        <Cart
            products={cart}
            onRemove={removeFromCart}
            onUpdate={updateProductAmount}
            onReset={resetCart}
        />
    );
};

export default CartPage;