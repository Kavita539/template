import {
  Paper,
  Stack,
  Typography,
  Link,
  Box,
  Avatar,
  Chip,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MaleIcon from "@mui/icons-material/Male";
import PhishingOutlinedIcon from "@mui/icons-material/PhishingOutlined";
import WidgetsIcon from '@mui/icons-material/Widgets';

const cargoSumarry = [
    {
        id: 1,
        label: "Total Weight",
        value: "40 ton"
    },
    {
        id: 2,
        label: "Total Pieces",
        value: "40"
    },
    {
        id: 3,
        label: "Total Volume",
        value: "800,000 cbm"
    }
]

const DashboardCard = ({ progress, details, lane, summary }) => {
  return (
    <>
      {progress && (
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "25rem",
            px: 3,
            py: 4,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              Quote Progress
            </Typography>
            <Typography sx={{ maxWidth: "12rem" }}>
              Please remember about the prices
            </Typography>
            <Link sx={{ color: "#91a4ec", fontWeight: "500" }}>
              See the document preview
            </Link>
          </Stack>
          <Box
            component="img"
            src="/assets/circularBar.png"
            alt="circularBar"
            sx={{ width: "7rem" }}
          />
        </Paper>
      )}

      {details && (
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: "25rem",
            px: 3,
            py: 4,
            gap: "1rem",
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              Customer Details
            </Typography>
            <BorderColorIcon />
          </Stack>
          <Stack>
            <Typography>Flamboy INC.</Typography>
            <Typography sx={{ maxWidth: "18rem" }}>
              4517 Washington Ave. Manchester, Kentucky, 39459
            </Typography>
          </Stack>
          <Stack>
            <Typography>Customer Partner ID</Typography>
            <Typography sx={{ fontWeight: "600" }}>302-1230-234</Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: "800" }}>Contact Person</Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Avatar src="/assets/avatar_badge.jpg" />
              <Stack>
                <Typography>Joey Rogan</Typography>
                <Typography>joeyrogan@flyingboys.com</Typography>
                <Typography>+21 34566789</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      )}
      {lane && (
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: "25rem",
            px: 3,
            py: 4,
            gap: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "700" }}>
            Trade Lanes
          </Typography>
          <Typography>
            You have 2 trade lane for <Typography sx={{color: "#7fe3f2"}}>Sea Transport</Typography>
          </Typography>
          <Stack spacing={1}>
            <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
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
              <Typography sx={{fontWeight: "500", minWidth: "15rem"}}>NZ CHC - PL GDN</Typography>
              <PhishingOutlinedIcon/>
            </Stack>
            <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
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
            <Typography sx={{fontWeight: "500", minWidth: "15rem"}}>NZ CHC - PL GDN - DE HAM</Typography>
            <PhishingOutlinedIcon />
          </Stack>
          </Stack>
        </Paper>
      )}

      {summary && (
        <Paper
        elevation={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: "25rem",
            px: 3,
            py: 4,
            gap: "1rem",
          }}>
          <Stack direction="row" sx={{justifyContent: "space-between"}}>
          <Typography variant="h6" sx={{ fontWeight: "700" }}>Cargo summary</Typography>
          <WidgetsIcon/>
          </Stack>
          <Stack>{cargoSumarry.map(({id, label, value}) =>(
            <Stack direction="row" spacing={3}>
            <Typography key={id} sx={{fontWeight: "700", minWidth: "7rem"}}>{label}</Typography>
            <Typography>{value}</Typography>
            </Stack>
          ))}</Stack>
          </Paper>
      )}
    </>
  );
};

export default DashboardCard;
