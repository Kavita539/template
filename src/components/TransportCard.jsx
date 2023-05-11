import { Box, IconButton, Stack, Typography } from "@mui/material";
import SailingIcon from "@mui/icons-material/Sailing";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PhishingOutlinedIcon from "@mui/icons-material/PhishingOutlined";
import EastIcon from "@mui/icons-material/East";

const TransportCard = ({ tradeNo, transitDays }) => {
  return (
    <Box sx={{ border: "2px solid #b2eef6", borderRadius: "4px" }}>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          px: 2,
          py: 1,
          borderBottom: "2px solid #b2eef6",
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
          <SailingIcon />
          <Typography>SEE TRANSPORT</Typography>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          {[
            <BorderColorIcon />,
            <PaymentsOutlinedIcon />,
            <DeleteOutlinedIcon />,
            <MoreVertOutlinedIcon />,
          ].map((btn, index) => (
            <IconButton key={index}>{btn}</IconButton>
          ))}
        </Stack>
      </Stack>
      <Box sx={{ display: "flex", bgcolor: "#f7feff" }}>
        <Stack spacing={3} sx={{ p: 3, borderRight: "1px solid #b2eef6" }}>
          <Stack sx={{ alignItems: "center" }}>
            <Typography
              sx={{
                bgcolor: "#39cae6",
                borderRadius: "50%",
                color: "#fff",
                p: 1,
              }}
            >
              {tradeNo}
            </Typography>
            <Typography sx={{ color: "#cccfdc" }}>Trade Lane</Typography>
          </Stack>
          <Stack sx={{ alignItems: "center" }}>
            <Typography>{transitDays} days</Typography>
            <Typography sx={{ color: "#cccfdc" }}>Transit Time</Typography>
          </Stack>
        </Stack>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Stack direction="row" spacing={3} sx={{alignItems: "center"}}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PhishingOutlinedIcon />
              <Stack>
                <Typography variant="h5" sx={{ fontWeight: "700" }}>
                  Christchurch
                </Typography>
                <Typography sx={{ color: "#cccfdc" }}>New Zealand</Typography>
              </Stack>
            </Stack>
            <EastIcon />
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PhishingOutlinedIcon />
              <Stack>
                <Typography variant="h5" sx={{ fontWeight: "700" }}>
                  Hamburg
                </Typography>
                <Typography sx={{ color: "#cccfdc" }}>Germany</Typography>
              </Stack>
            </Stack>
            <EastIcon />
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PhishingOutlinedIcon />
              <Stack>
                <Typography variant="h5" sx={{ fontWeight: "700" }}>
                  Gdansk
                </Typography>
                <Typography sx={{ color: "#cccfdc" }}>Poland</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={6}>
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                CFS Origin
              </Typography>
              <Typography sx={{ color: "#cccfdc" }}>Origin Type</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                CFS Destination
              </Typography>
              <Typography sx={{ color: "#cccfdc" }}>
                Destination Type
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                PL GDN
              </Typography>
              <Typography sx={{ color: "#cccfdc" }}>
                Incoterms Loaction - UNLOCODE
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                FOB
              </Typography>
              <Typography sx={{ color: "#cccfdc" }}>INCO Terms</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                Country Projects
              </Typography>
              <Typography sx={{ color: "#cccfdc" }}>Product</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default TransportCard;
