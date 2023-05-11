import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  Link,
} from "@mui/material";
import Dashboard from "../Dashboard";
import DashboardCard from "../DashboardCard";
import Navbar from "../Navbar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MaleIcon from "@mui/icons-material/Male";
import TransportCard from "../TransportCard";
import TradeCard from "../TradeCard";

const Body = () => {
  return (
    <Box sx={{ bgcolor: "#f1f4f8", heigth: "100%" }}>
      <Navbar />
      <Dashboard />
      <Box sx={{ p: 3, display: "flex", gap: "2rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <DashboardCard progress />
          <DashboardCard details />
          <DashboardCard lane />
          <DashboardCard summary />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Paper
            elevation={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "82rem",
              px: 3,
              py: 4,
              gap: "1rem",
            }}
          >
            <Tabs>
              {[
                "General Parameters",
                "Customer Details",
                "Trade Lanes",
                "Pricing",
              ].map((tab, index) => (
                <Tab key={index} label={tab} />
              ))}
            </Tabs>
            <Button startIcon={<SettingsOutlinedIcon />} sx={{ color: "#000" }}>
              Settings
            </Button>
          </Paper>
          <Paper
            elevation={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "82rem",
              px: 3,
              py: 4,
              gap: "1rem",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              Trade Lanes
            </Typography>
            <Typography>You have 2 trade lanes for this quotation</Typography>
            <Stack direction="row" spacing={10} sx={{ alignItems: "center" }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Chip
                  icon={<MaleIcon />}
                  label="1"
                  sx={{
                    bgcolor: "#e0fbff",
                    color: "#495883",
                    borderRadius: "1px",
                    "& .MuiChip-icon": { color: "#495883" },
                  }}
                />
                <Typography>NZ CHC</Typography>
                <Typography>PLGDN</Typography>
                <Link sx={{ color: "#4f77fb", fontWeight: "500" }}>
                  See Tradeline
                </Link>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Chip
                  icon={<MaleIcon />}
                  label="2"
                  sx={{
                    bgcolor: "#e0fbff",
                    color: "#495883",
                    borderRadius: "1px",
                    "& .MuiChip-icon": { color: "#495883" },
                  }}
                />
                <Typography>NZ CHC</Typography>
                <Typography>PLGDN</Typography>
                <Typography>DEHAM</Typography>
                <Link sx={{ color: "#4f77fb", fontWeight: "500" }}>
                  See Tradeline
                </Link>
              </Stack>
            </Stack>
            <TransportCard tradeNo={1} transitDays={37}/>
            <Stack direction="row" spacing={2}>
            <TradeCard liquidNitro/>
            <TradeCard frozenFish/>
            <TradeCard assignCargo/>
            </Stack>
            <TransportCard tradeNo={2} transitDays={42}/>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
