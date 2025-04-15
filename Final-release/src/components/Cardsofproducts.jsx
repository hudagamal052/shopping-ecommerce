import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Container,
} from "@mui/material";

const Cardsofproducts = () => {
  const [cart, setCart] = useState([]);

  const removerfromcart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <Box sx={{ pt: 12, minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          fontWeight={700}
          color="#006A71"
          mb={4}
        >
          Your Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography variant="h6" align="center" color="#666">
            Your cart is empty.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {cart.map((product, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    boxShadow: 3,
                    borderRadius: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 120, height: 120, objectFit: "contain", m: 2 }}
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" fontWeight={600} color="#006A71">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="#666" gutterBottom>
                      <strong style={{ color: "#d32f2f" }}>Category:</strong> {product.category}
                    </Typography>
                    <Typography variant="h6" fontWeight={700} color="#9ACBD0">
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <Box sx={{ pr: 2 }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removerfromcart(product)}
                      sx={{ fontWeight: 600, textTransform: "none" }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Box textAlign="center" mt={6}>
          <Link to="/products">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#006A71",
                "&:hover": { backgroundColor: "#004f52" },
                fontWeight: "bold",
                px: 4,
                py: 1.5,
              }}
            >
              Back to Products
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Cardsofproducts;
