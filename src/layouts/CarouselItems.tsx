import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";
import { CarouselItemType } from "./CarouselItem";
import CarouselItem from "./CarouselItem";
import book1 from "./../Images/BooksImages/new-book-1.png";
import book2 from "./../Images/BooksImages/new-book-2.png";
import book3 from "./../Images/BooksImages/new-book-3.png";

const CarouselItems: React.FC = () => {
  const items: CarouselItemType[] = [
    {
      id: 1,
      title: "Advanced Techniques in C#",
      imgSrc: `${book1}`,
      authorName: "Arda, Luv",
    },
    {
      id: 2,
      title: "Expert Guide To Machine Learning",
      imgSrc: `${book2}`,
      authorName: "Ahmet, Luv",
    },
    {
      id: 1,
      title: "Crash Course in Python",
      imgSrc: `${book3}`,
      authorName: "John, Luv",
    },
  ];

  // const numberDisplayed = 3;
  // const start = 0;
  // const end = start + 3;
  // const displayedItems: Array<any> = [];

  // displayedItems.push(
  //   items
  //     .slice(start, end)
  //     .map((item, i) => <CarouselItem key={i} item={item} />)
  // );

  return (
    <Box my="2rem">
      <Typography variant="h4" mb="1rem" textAlign="center">
        Find your next "I stayed up too late reading" book.
      </Typography>
      <Carousel
        navButtonsAlwaysVisible={true}
        indicators={false}
        index={1}
        navButtonsProps={{
          style: {
            backgroundColor: "#0e76a8",
          },
        }}
        sx={{
          width: "100%",
          display: "flex",
          mx: "0",
          // "& .css-1abc02a:hover button": {
          //   backgroundColor: "#0e76a8",
          // },
        }}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselItems;
