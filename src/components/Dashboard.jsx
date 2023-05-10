import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const Dashboard = () => {
  return (
    <Box sx={{pl: "4rem", pr: "2rem", pt: "1rem"}}>
      <Button startIcon={<KeyboardBackspaceIcon />} sx={{color: "#9db3fd"}}>Back to Dashboard</Button>
      <Stack direction="row" sx={{justifyContent: "space-between", pt: "1rem", alignItems: "center"}}>
        <Stack direction="row" gap={3} sx={{alignItems: "center"}}>
          <Typography sx={{fontWeight: 600, fontSize: "1.5rem", letterSpacing: 0}}>DTW10234568RSW</Typography>
          <Chip icon={<ErrorOutlineOutlinedIcon/>} label="PRP" sx={{bgcolor: "#f98404", color: "#fff", "& .MuiChip-icon":{color: "#fff"}}}/>
          <Stack direction="row" spacing={1}>
            <Typography sx={{color: "#cccfdc"}}>Updated</Typography>
            <Typography>03.01.2022</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography>SPOT</Typography>
            <Typography>Export</Typography>
            <Typography>LCL</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography sx={{color: "#cccfdc"}}>Valid</Typography>
            <Typography>07.01.2022-17.01.2022</Typography>
          </Stack>
        </Stack>
        <Button variant="contained" sx={{backgroundColor: "#4f77fb", color: "#fff"}}>Save & Publish</Button>
      </Stack>
    </Box>
  );
};

export default Dashboard;
