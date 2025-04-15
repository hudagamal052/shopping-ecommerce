import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { day: "Sun", thisWeek: 8000, lastWeek: 5000 },
  { day: "Mon", thisWeek: 12000, lastWeek: 7000 },
  { day: "Tue", thisWeek: 15000, lastWeek: 10000 },
  { day: "Wed", thisWeek: 14000, lastWeek: 9000 },
  { day: "Thu", thisWeek: 16000, lastWeek: 11000 },
  { day: "Fri", thisWeek: 18000, lastWeek: 13000 },
  { day: "Sat", thisWeek: 12000, lastWeek: 8000 },
];

const ProductViewsChart = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2, backgroundColor: "#fff" , width: "100%"}}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">
        Product Views
      </Typography>
      <ResponsiveContainer width={300} height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Legend />
          <Bar dataKey="thisWeek" fill="#9ACBD0" name="This Week" />
          <Bar dataKey="lastWeek" fill="#006A71" name="Last Week" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ProductViewsChart;