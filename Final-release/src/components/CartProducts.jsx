import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProducts = ({ product }) => {
  const { updateProductAmount, removeFromCart } = useShop();
  const navigate = useNavigate();

  const totalPrice = product.price ? (product.price * product.quantity).toFixed(2) : 0;

  const handleBuyNow = () => {
    navigate('/payment', {
      state: {
        product: {
          ...product,
          quantity: product.quantity,
          price: product.price,
        },
        totalPrice,
      },
    });
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        m: 2,
        borderRadius: 3,
        boxShadow: 4,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '100%', maxWidth: '250px', height: '200px', objectFit: 'contain' }}
          />
        </Box>
        <Typography variant="h6" gutterBottom fontWeight="bold" color="#006A71">
          {product.title}
        </Typography>
        <Typography color="#666">Price: ${product.price?.toFixed(2) || 'N/A'}</Typography>
        <Typography color="#666">Amount: {product.quantity}</Typography>
        <Typography variant="body1" fontWeight="bold" color="#006A71">
          Total: ${totalPrice}
        </Typography>
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

      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box>
          <IconButton onClick={() => updateProductAmount(product.id, product.quantity + 1)} sx={{ color: '#006A71' }}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={() => updateProductAmount(product.id, product.quantity - 1)} sx={{ color: '#9ACBD0' }}>
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={() => removeFromCart(product.id)} sx={{ color: '#d32f2f' }}>
            <DeleteIcon />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          onClick={handleBuyNow}
          sx={{
            backgroundColor: '#006A71',
            '&:hover': { backgroundColor: '#004F52' },
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

CartProducts.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartProducts;
