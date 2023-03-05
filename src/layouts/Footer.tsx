import { Box, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper elevation={6} sx={{ backgroundColor: "#0e76a8", color: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: matchesSM ? "column" : "row",
          justifyContent: matchesSM ? "center" : "space-between",
          alignItems: "center",
          py: "2rem",
        }}
      >
        <Box
          sx={{
            ml: matchesSM ? null : "2em",
            mb: matchesSM ? "1em" : null,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1">© KokoLib, Inc</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: matchesSM ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            mr: matchesSM ? null : "2em",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ mb: matchesSM ? "0.5em" : null }}
          >
            Home
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: matchesSM ? null : "3em" }}>
            Search Books
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Footer;
