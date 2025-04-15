import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import FavoriteProducts from '../components/FavoriteProducts';
import { useShop } from '../context/ShopContext';

const FavoritePage = () => {
    const { favorites } = useShop();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <Container sx={{ padding: '20px' }}>
                {/* العنوان بتنسيق مشابه لصفحة الكارت */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h3" color="#006A71" fontWeight={700}>
                        Favorite Products
                    </Typography>
                </Box>

                {favorites.length === 0 ? (
                    <Typography variant="h5" sx={{ textAlign: 'center', mt: 4, color: '#666' }}>
                        Your favorite list is empty
                    </Typography>
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
