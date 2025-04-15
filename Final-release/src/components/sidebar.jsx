import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Dashboard, ShoppingCart, People, Payment, Chat, Mail, CalendarMonth, Settings, ExitToApp } from "@mui/icons-material";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard /> },
  { text: "Customer", icon: <People /> },
  { text: "Products", icon: <ShoppingCart /> },
  { text: "Payments", icon: <Payment /> },
  { text: "Orders", icon: <ShoppingCart /> },
  { text: "Chat", icon: <Chat /> },
  { text: "Mail", icon: <Mail /> },
  { text: "Calendar", icon: <CalendarMonth /> },
  { text: "Setting", icon: <Settings /> },
  { text: "Log Out", icon: <ExitToApp /> },
];

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <Box sx={{ p: 2 }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#F2EFE7",
          },
        }}
      >
        {drawer}
      </Drawer>

      
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#F2EFE7",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;