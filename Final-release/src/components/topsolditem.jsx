import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";

const items = [
  { name: "Jeans", value: 75 },
  { name: "Jacket", value: 90 },
  { name: "Sweater", value: 80 },
  { name: "T-Shirt", value: 60 },
  { name: "Cap", value: 50 },
];

const TopSoldItems = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2, height: "150" }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">Top Sold Items</Typography>
      {items.map((item, index) => (
        <Box key={index} sx={{ my: 2 }}>
          <Typography variant="body2" fontWeight="medium">{item.name}</Typography>
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{ height: 8, borderRadius: 5 }}
          />
        </Box>
      ))}
    </CardContent>
  </Card>
);

export default TopSoldItems;