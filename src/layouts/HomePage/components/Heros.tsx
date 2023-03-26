import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";

const Heros: React.FC = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper elevation={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: matchesMD ? "0.5em" : null,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: matchesMD ? "column" : "row",
            justifyContent: matchesMD ? "flex-start" : "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: "0 0 50%", mb: matchesMD ? "1em" : "" }}>
            <img
              src="https://images.unsplash.com/photo-1536532184021-da5392b55da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="blue sky"
              width="100%"
            />
          </Box>
          <Box sx={{ flex: "0 0 50%", px: matchesMD ? null : "5em" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: matchesMD ? "1.1rem" : null,
                mb: matchesMD ? "0.5em" : "1em",
              }}
            >
              What have you been reading?
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: matchesMD ? "1em" : null }}
            >
              The library team would love to know what you have been reading.
              Whether it is to learn a new skill or grow within one, we will be
              able to provide the top content for you!
            </Typography>
            <Button
              variant="contained"
              sx={{ textTranform: "none", mb: matchesMD ? "2em" : null }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: matchesMD ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {matchesMD && (
            <Box sx={{ flex: "0 0 50%", mb: matchesMD ? "1em" : "" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_1280.jpg"
                alt="green flower"
                width="100%"
              />
            </Box>
          )}
          <Box sx={{ flex: "0 0 50%", px: matchesMD ? null : "5em" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: matchesMD ? "1.1rem" : null,
                mb: matchesMD ? "0.5em" : "1em",
              }}
            >
              Our collection is always changing!
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: matchesMD ? "0.5em" : null }}
            >
              Try to check in daily as our collection is always changing! We
              work nonstop to provide the most accurate book selection possible
              for our Luv 2 Read students! We are diligent about our book
              selection and our books are always going to be our top priority.
            </Typography>
          </Box>
          {!matchesMD && (
            <Box sx={{ flex: "0 0 50%" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_1280.jpg"
                alt="green flower"
                width="100%"
              />
            </Box>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default Heros;
