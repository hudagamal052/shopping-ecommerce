import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import FavoriteProducts from '../components/FavoriteProducts';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const FavoritePage = () => {
    const { favorites } = useShop();
    const navigate = useNavigate();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <Container sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h3" color="#006A71" fontWeight={700}>
                        Favorite Products
                    </Typography>
                </Box>

                {favorites.length === 0 ? (
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
                            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                            alt="Empty favorites"
                            sx={{ width: 150, height: 150, mb: 3 }}
                        />
                        <Typography variant="h5" sx={{ mt: 2, color: '#555' }}>
                            No favorites yet 💔
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1, color: '#777' }}>
                            You haven’t added any products to your favorites. Let’s find some gems!
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
                            Explore Products
                        </Button>
                    </Box>
                ) : (
                    <Grid container spacing={2}>
                        {favorites.map((prod) => (
                            <Grid item xs={12} md={6} lg={4} key={prod.id}>
                                <FavoriteProducts product={prod} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default FavoritePage;
