import React from "react";
import { Grid, Typography, Button } from "@mui/material";

import BookModel from "../../../models/BookModel";

interface CarouselItemProp {
  item: BookModel;
}

const CarouselItem: React.FC<CarouselItemProp> = ({ item }) => {
  return (
    <Grid container flexDirection="column" alignItems="center">
      <Grid item sx={{ width: "30%", height: "auto" }}>
        <img width="100%" src={item.img} alt="" />
      </Grid>
      <Grid item>
        <Typography textAlign="center" variant="body1">
          {item.title}
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          {item.author}
        </Typography>
        <Grid
          item
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{ mt: "1em", mb: "2em", textTransform: "none" }}
          >
            Reserve
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarouselItem;
