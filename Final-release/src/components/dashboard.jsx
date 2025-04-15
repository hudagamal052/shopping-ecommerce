import { Grid, Container } from "@mui/material";
import StatsCards from "./statuscards";
import SalesChart from "./saleschart";
import ProductViewsChart from "./productviewscards";
import OrdersTable from "./orderstable";
import TopSoldItems from "./topsolditem";
import Sidebar from "./sidebar";

const Dashboard = () => (
  <>
    <Container sx={{ mt: 4 ,mb:4}}>
      <StatsCards />
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} lg={8}>
          <SalesChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProductViewsChart />
        </Grid>
        <Grid item xs={12} md={8}>
          <OrdersTable />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopSoldItems />
        </Grid>

      </Grid>
    </Container>
  </>
);

export default Dashboard;
