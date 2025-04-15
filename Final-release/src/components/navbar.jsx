import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useShop } from "../context/ShopContext";
import { AppBar, Toolbar, Box, IconButton, Badge, Button, Container } from "@mui/material";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/login", label: "Login" },
  { to: "/category", label: "Categories" },
  { to: "/dashboard", label: "Dashboard" },
];

const Navbar = () => {
  const { cart, favorites } = useShop();
  const location = useLocation();

  const getColor = (path) =>
    location.pathname === path ? "#006A71" : "#fff";

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        backgroundColor: "#9ACBD0",
        color: "#fff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: { xs: 2, sm: 3, md: 5 } }}>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                sx={{
                  color: getColor(link.to),
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    color: "#006A71",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              component={Link}
              to="/cart"
              sx={{ color: "#fff", "&:hover": { color: "#006A71" } }}
            >
              <Badge
                badgeContent={cart.length}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#006A71",
                    color: "#fff",
                  },
                }}
              >
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton
              component={Link}
              to="/favorite"
              sx={{ color: "#fff", "&:hover": { color: "#006A71" } }}
            >
              <Badge
                badgeContent={favorites.length}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#006A71",
                    color: "#fff",
                  },
                }}
              >
                <Heart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
