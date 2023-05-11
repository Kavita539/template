import { AppBar, Stack, Toolbar, Typography, Button, IconButton, Badge, Avatar } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ width: "100%", bgcolor: "#fff", borderBottom: "4px solid #f7f7fb" }}>
      <Toolbar
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          component="img"
          src="/assets/fastCargo.png"
          alt="fastCargo-logo"
          sx={{ width: "8rem"}}
        />
        <Stack direction="row" spacing={3}>
          {[
            "Dahboards",
            "Quotes",
            "Customers",
            "Templates",
            "Rate request",
          ].map((navItem, index) => (
            <Button key={index}>
              <Typography
                variant="body1"
                sx={{
                  fontsize: "12px",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                {navItem}
              </Typography>
            </Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={2}>
            <IconButton><NotificationsNoneOutlinedIcon/></IconButton>
            <IconButton><SettingsOutlinedIcon/></IconButton>
            <Button endIcon={<KeyboardArrowDownIcon/>}>Hi Alex</Button>
            <Badge overlap="circular" variant="dot">
            <Avatar src="/assets/avatar_badge.jpg"/>
            </Badge>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
