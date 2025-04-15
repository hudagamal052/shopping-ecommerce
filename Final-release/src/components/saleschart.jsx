import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", currentYear: 40, lastYear: 20 },
  { name: "Mar", currentYear: 50, lastYear: 30 },
  { name: "May", currentYear: 70, lastYear: 40 },
  { name: "Jul", currentYear: 90, lastYear: 60 },
  { name: "Sep", currentYear: 80, lastYear: 50 },
  { name: "Dec", currentYear: 100, lastYear: 70 },
];

const SalesChart = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2, backgroundColor: "#fff" }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">
        Sales Trend
      </Typography>
      <ResponsiveContainer width={530} height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Line type="monotone" dataKey="currentYear" stroke="#006A71" strokeWidth={3} />
          <Line type="monotone" dataKey="lastYear" stroke="#9ACBD0" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default SalesChart;