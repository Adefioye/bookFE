import * as React from "react";
import { Box } from "@mui/material";

import Rating from "@mui/material/Rating";

const Ratings = () => {
  const [rating, setRating] = React.useState<number | null>(2);
  return (
    <Box>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
      />
    </Box>
  );
};

export default Ratings;
