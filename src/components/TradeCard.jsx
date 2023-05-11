import { Box, IconButton, Stack, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import SailingIcon from "@mui/icons-material/Sailing";
import ThermostatAutoOutlinedIcon from "@mui/icons-material/ThermostatAutoOutlined";
import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";

const TradeCard = ({ liquidNitro, frozenFish, assignCargo }) => {
  return (
    <>
      {liquidNitro && (
        <Box
          sx={{
            border: "3px solid #faba9e",
            borderRadius: "4px",
            width: "30rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
            }}
          >
            <SailingIcon />
            <Stack direction="row">
              <IconButton>
                <BorderColorIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Typography sx={{ px: 2 }}>Liquid Nitrogen</Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ borderBottom: "1px solid #b2eef6", pb: 1 }}
          >
            {["20 Pieces", "2o ton", "400,000 dbm"].map((data, i) => (
              <Typography key={i} sx={{ color: "#cccfdc", px: 2 }}>
                {data}
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={2} sx={{ px: 2, py: 1 }}>
            <ThermostatAutoOutlinedIcon />
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              32-12/A2
            </Typography>
          </Stack>
        </Box>
      )}
      {frozenFish && (
        <Box
          sx={{
            border: "3px solid #b2eef6",
            borderRadius: "4px",
            width: "30rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
            }}
          >
            <SailingIcon />
            <Stack direction="row">
              <IconButton>
                <BorderColorIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Typography sx={{ px: 2 }}>Frozen Fish</Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ borderBottom: "1px solid #b2eef6", pb: 1 }}
          >
            {["20 Pieces", "2o ton", "400,000 dbm"].map((data, i) => (
              <Typography key={i} sx={{ color: "#cccfdc", px: 2 }}>
                {data}
              </Typography>
            ))}
          </Stack>
          <Stack direction="row" spacing={2} sx={{ px: 2, py: 1 }}>
            <ThermostatAutoOutlinedIcon />
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              32-12/A2
            </Typography>
          </Stack>
        </Box>
      )}
      {assignCargo && (
        <Box
          sx={{
            border: "3px dashed #acafc1",
            borderRadius: "4px",
            width: "17rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            p: 2
          }}
        >
        <FilterFramesOutlinedIcon sx={{width: "5rem"}}/>
        <Typography variant="h6">Assign Cargo +</Typography>
        </Box>
      )}
    </>
  );
};

export default TradeCard;
