import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ClockImage from "./../Images/PublicImages/image-3.jpg";

const LibraryServices: React.FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper elevation={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: matchesMD ? "column" : "row",
          justifyContent: matchesMD ? "center" : "flex-start",
          alignItems: matchesMD ? "flex-start" : "center",
          px: matchesMD ? "0.5em" : "2em",
          py: matchesMD ? "2em" : "1em",
        }}
      >
        <Box
          sx={{
            flex: "0 0 70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            px: matchesMD ? null : "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: matchesMD ? "1.1rem" : null,
              mb: matchesMD ? "0.5em" : "1em",
            }}
          >
            {" "}
            Can't find what you are looking for?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: matchesMD ? "0.5em" : "1em", textAlign: "left" }}
          >
            If you cannot find what you are looking for, send our library
            admin's a personal message!
          </Typography>
          <Button
            variant="contained"
            sx={{ textTransform: "none", mb: matchesMD ? "2em" : null }}
          >
            Sign up
          </Button>
        </Box>
        <Box sx={{ flex: "0 0 30%" }}>
          <img src={ClockImage} alt="clock image" width="100%" />
        </Box>
      </Box>
    </Paper>
  );
};

export default LibraryServices;
