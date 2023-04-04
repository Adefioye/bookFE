import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Ratings from "./Ratings";

const Reviews: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ mr: "4em" }}>
          <Typography variant="body2" mb="0.5em">
            hello@gmail.com
          </Typography>
          <Typography variant="body1">September 12, 2022</Typography>
          <Typography variant="body1">
            First book is pretty good overall
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ratings />
        </Box>
      </Box>
      <Divider sx={{ borderBottomWidth: 2.5 }}  />
    </Box>
  );
};

export default Reviews;
