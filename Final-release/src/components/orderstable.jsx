
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";

const orders = [
  { id: "#202394", customer: "Ripon Ahmed", date: "1 Jan 24", price: "Tk 1200", status: "Completed" },
  { id: "#202395", customer: "Darlene Robertson", date: "2 Jan 24", price: "Tk 1800", status: "Pending" },
  { id: "#202396", customer: "Leslie Alexander", date: "3 Jan 24", price: "Tk 500", status: "Completed" },
  { id: "#202397", customer: "Ralph Edwards", date: "4 Jan 24", price: "Tk 1800", status: "Completed" },
  { id: "#202398", customer: "Ronald Richards", date: "9 Jan 24", price: "Tk 2500", status: "Pending" },
  { id: "#202399", customer: "Devon Lane", date: "9 Jan 24", price: "Tk 700", status: "Pending" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Pending":
      return "warning";
    default:
      return "default";
  }
};

const OrdersTable = () => (
  <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2, height: "100%" ,mb: 2 }}>
    <CardContent>
      <Typography variant="h6">All Orders</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>
                  <Chip label={order.status} color={getStatusColor(order.status)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);

export default OrdersTable;