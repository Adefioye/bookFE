import React from "react";
import { Grid, Typography, Button } from "@mui/material";

export interface CarouselItemType {
  id: number;
  title: string;
  imgSrc: string;
  authorName: string;
}

interface CarouselItemProp {
  item: CarouselItemType;
}

const CarouselItem: React.FC<CarouselItemProp> = ({ item }) => {
  return (
    <Grid container flexDirection="column" alignItems="center">
      <Grid item sx={{ width: "30%", height: "auto" }}>
        <img width="100%" src={item.imgSrc} alt="" />
      </Grid>
      <Grid item>
        <Typography textAlign="center" variant="body1">
          {item.title}
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          {item.authorName}
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
