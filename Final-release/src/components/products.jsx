import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { Typography, Stack, CircularProgress } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [error, setError] = useState(null);     // حالة الخطأ

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/411ee242-81cf-424e-9a8b-5601c75fb251"
        );

        const allProducts = response.data.categories.flatMap((category) =>
          category.subcategories.flatMap((subcategory) => {
            return subcategory.products.map((product) => ({
              ...product,
              category: `${category.name} / ${subcategory.name}`,
            }));
          })
        );

        setProducts(allProducts);
      } catch (err) {
        setError("فشل في تحميل المنتجات، حاول مرة أخرى لاحقًا.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-28">
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        color="#004f52"
        gutterBottom
        sx={{
          mb: 6,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#006A71',
            margin: '16px auto 0'
          }
        }}
      >
        Our Products
      </Typography>

      {loading ? (
        <Stack alignItems="center" mt={10}>
          <CircularProgress size={60} />
        </Stack>
      ) : error ? (
        <Typography textAlign="center" color="error" mt={5}>
          {error}
        </Typography>
      ) : (
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={5}
          m={5}
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Stack>
      )}
    </div>
  );
};

export default Products;
