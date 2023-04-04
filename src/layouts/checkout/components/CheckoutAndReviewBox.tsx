import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  useTheme,
} from "@mui/material";

const CheckoutAndReviewBox = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ width: "70%", height: "90%", px: "1.5em" }}>
      <Box sx={{ py: "0.5em" }}>
        <Typography variant="subtitle2">
          0/5{" "}
          <Typography sx={{ display: "inline" }} variant="body1">
            books checked out
          </Typography>
        </Typography>
      </Box>
      <Divider sx={{ borderBottomWidth: 2.5 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
          py: "1em",
        }}
      >
        <Box>
          <Typography variant="h6" color="success.main">
            Available
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* left */}
          <Box>
            <Typography variant="subtitle2">
              10{" "}
              <Typography sx={{ display: "inline" }} variant="body1">
                copies
              </Typography>
            </Typography>
          </Box>
          {/* right */}
          <Box>
            <Typography variant="subtitle2">
              10{" "}
              <Typography sx={{ display: "inline" }} variant="body1">
                available
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" color="success">
            Sign in
          </Button>
        </Box>
      </Box>
      <Divider sx={{ borderBottomWidth: 2.5 }} />
      <Box sx={{ mt: "0.5em" }}>
        <Typography variant="body1">
          This number can change until placing order has been complete
        </Typography>
        <Typography variant="body1" sx={{ mt: "0.5em" }}>
          Sign in to be able to leave a review
        </Typography>
      </Box>
    </Paper>
  );
};

export default CheckoutAndReviewBox;
