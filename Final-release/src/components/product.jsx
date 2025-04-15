import React, { memo } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  Divider,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        border: "2px solid #004f52",
        borderRadius: "12px",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 8px 16px rgba(0, 106, 113, 0.2)",
          backgroundColor: "#e0f2f1",
        },
      }}
    >
      <img
        src={product.image}
        loading="lazy"
        alt={product.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ color: "#006A71", fontWeight: 700, mb: 1 }}
        >
          {product.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
          <strong style={{ color: "#004f52" }}>Category:</strong>{" "}
          {product.category}
        </Typography>
        <h6 className=" text-[#004f52] hover:text-[#00796b] transition-colors duration-300 !important">
          {product.name}
        </h6>

        <Typography variant="h6" sx={{ color: "#004f52", fontWeight: 600 }}>
          ${product.price}
        </Typography>

      </CardContent>

      <Divider sx={{ marginY: 1 }} />

      <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
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

export default memo(Product);
