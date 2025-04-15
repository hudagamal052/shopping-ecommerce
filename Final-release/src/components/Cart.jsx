import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import CartProducts from './CartProducts';
import { useShop } from '../context/ShopContext';

const Cart = () => {
    const { cart, resetCart, updateProductAmount, removeFromCart, getTotalPrice } = useShop();
    const navigate = useNavigate();
    const totalPrice = getTotalPrice();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <Container sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h3" color="#006A71" fontWeight={700}>
                        Your Cart
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={resetCart}
                        sx={{
                            fontWeight: 600,
                            backgroundColor: "#d32f2f",
                            "&:hover": {
                                backgroundColor: "#9A1C1C",
                            },
                        }}
                    >
                        Reset Cart
                    </Button>
                </Box>

                {cart.length === 0 ? (
                    <Box
                        sx={{
                            textAlign: 'center',
                            mt: 8,
                            animation: 'fadeIn 1s ease-in-out',
                            '@keyframes fadeIn': {
                                from: { opacity: 0, transform: 'translateY(20px)' },
                                to: { opacity: 1, transform: 'translateY(0)' },
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                            alt="Empty cart"
                            sx={{ width: 150, height: 150, mb: 3 }}
                        />
                        <Typography variant="h5" sx={{ mt: 2, color: '#555' }}>
                            Oops! Your cart is empty 🛒
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1, color: '#777' }}>
                            Looks like you haven’t added anything yet. Let’s fix that!
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/products')}
                            sx={{
                                mt: 4,
                                backgroundColor: '#006A71',
                                '&:hover': {
                                    backgroundColor: '#004f52',
                                },
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                            }}
                        >
                            Browse Products
                        </Button>
                    </Box>
                ) : (
                    <>
                        <Grid container spacing={2}>
                            {cart.map((prod) => (
                                <Grid item xs={12} md={6} lg={4} key={prod.id}>
                                    <CartProducts
                                        product={prod}
                                        updateAmount={updateProductAmount}
                                        removeProduct={removeFromCart}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#006A71" }}>
                                Total: ${totalPrice.toFixed(2)}
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4, textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#006A71',
                                    '&:hover': {
                                        backgroundColor: '#004f52',
                                    },
                                    fontWeight: 700,
                                    py: 1.5,
                                    px: 4,
                                }}
                            >
                                Proceed to Checkout
                            </Button>
                        </Box>
                    </>
                )}
            </Container>
        </Box>
    );
};

export default Cart;
