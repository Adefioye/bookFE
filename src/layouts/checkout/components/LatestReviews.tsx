import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import Ratings from "./Ratings";
import Reviews from "./Reviews";

const LatestReviews: React.FC = () => {
  return (
    <Box sx={{ display: "flex", py: "1.5em" }}>
      <Box sx={{ mr: "4em" }}>
        <Typography variant="h2">Latest</Typography>
        <Typography variant="h2">Reviews:</Typography>
      </Box>

      <Box>
        <Reviews />
        <Box mt="1em">
          <Button color="primary" variant="contained">
            Reach all reviews
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestReviews;
