import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import {
  People,
  ShoppingCart,
  Receipt,
  MonetizationOn,
} from "@mui/icons-material";

const stats = [
  { label: "Total Customers", value: "2000+", icon: <People /> },
  { label: "Total Products", value: "140+", icon: <ShoppingCart /> },
  { label: "Total Orders", value: "1600+", icon: <Receipt /> },
  { label: "Total Sales", value: "2000+", icon: <MonetizationOn /> },
];

const StatsCards = () => (
  <Grid container spacing={3}>
    {stats.map((stat, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card
          sx={{
            minWidth: 0,
            textAlign: "center",
            py: 3,
            background: "linear-gradient(135deg, #006A71 , #9ACBD0 )",
            color: "white",
            borderRadius: 2,
            padding: 2,
          }}
        >
          <CardContent>
            <Box sx={{ fontSize: 40, mb: 1,display: "flex", justifyContent: "center" }}>{stat.icon}</Box>
            <Typography variant="h5" fontWeight="bold">
              {stat.value}
            </Typography>
            <Typography variant="subtitle2" color="white">
              {stat.label}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default StatsCards;