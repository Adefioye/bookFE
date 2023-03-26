import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExploreBookBackground from "../../../Images/PublicImages/image-2.jpg";

const ExploreTopBooks: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${ExploreBookBackground}) no-repeat`,
        backgroundColor: "grey",
        backgroundBlendMode: "multiply",
        // background: "rgba(0, 0, 0, 0.5"
      }}
    >
      <Box sx={{ my: "3rem" }}>
        <Typography variant={matchesSM ? "h5" : "h2"} color="#fff">
          Find your next adventure
        </Typography>
        <Typography
          variant={matchesSM ? "subtitle1" : "body1"}
          color="#fff"
          sx={{ mb: "1em" }}
        >
          Where would you like to go next?
        </Typography>
        <Button variant="contained" sx={{ textTransform: "none" }}>
          Explore top books
        </Button>
      </Box>
    </Box>
  );
};

export default ExploreTopBooks;
