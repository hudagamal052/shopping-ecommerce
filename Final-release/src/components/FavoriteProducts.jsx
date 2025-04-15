import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const FavoriteProducts = ({ product }) => {
    const { removeFromFavorite } = useShop();
    const navigate = useNavigate();

    return (
        <Card sx={{
            minWidth: 275,
            margin: '10px',
            background: '#f5f5f5',
            borderRadius: '16px',
            boxShadow: 3,
            border: '1px solid #004f52',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
            }
        }}>
            <CardContent sx={{ paddingBottom: 2 }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'contain',
                        borderRadius: '12px',
                    }}
                />
                <Typography variant="h6" component="div" gutterBottom sx={{ color: '#006A71', fontWeight: 'bold', marginTop: 2 }}>
                    {product.name}
                </Typography>
                <Typography color="text.secondary" sx={{ color: '#006A71', marginBottom: 2 }}>
                    Price: ${product.price ? product.price.toFixed(2) : 'N/A'}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px' }}>
                <Button
                    size="small"
                    color="error"
                    onClick={() => removeFromFavorite(product.id)}
                    sx={{
                        backgroundColor: '#d32f2f',
                        '&:hover': { backgroundColor: '#b71c1c' },
                        borderRadius: '12px',
                        color: '#fff',
                        fontWeight: 'bold',
                        padding: '6px 12px',
                    }}
                >
                    🗑️ Remove
                </Button>
                <Button
                    size="small"
                    sx={{
                        backgroundColor: '#006A71',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#004f52' },
                        borderRadius: '12px',
                        fontWeight: 'bold',
                        padding: '6px 12px',
                    }}
                    onClick={() => navigate(`/product/${product.id}`)}
                >
                    🔍 View Details
                </Button>
            </CardActions>
        </Card>
    );
};

FavoriteProducts.propTypes = {
    product: PropTypes.object.isRequired,
};

export default FavoriteProducts;
