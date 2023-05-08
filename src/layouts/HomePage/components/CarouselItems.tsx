import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Button, Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import CarouselItem from "./CarouselItem";
import book1 from "../../../Images/BooksImages/new-book-1.png";
import book2 from "../../../Images/BooksImages/new-book-2.png";
import book3 from "../../../Images/BooksImages/new-book-3.png";
import BookModel from "../../../models/BookModel";


const CarouselItems: React.FC = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseURL: string = "http://localhost:8080/api/books";
      const url: string = `${baseURL}?page=0&size=9`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();
      const responseData = responseJson._embedded.books;

      const loadedBooks: BookModel[] = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((err: any) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  const items: BookModel[] = [
    {
      id: 1,
      title: "Advanced Techniques in C#",
      img: `${book1}`,
      author: "Arda, Luv",
    },
    {
      id: 2,
      title: "Expert Guide To Machine Learning",
      img: `${book2}`,
      author: "Ahmet, Luv",
    },
    {
      id: 3,
      title: "Crash Course in Python",
      img: `${book3}`,
      author: "John, Luv",
    },
    {
      id: 4,
      title: "Advanced Techniques in C#",
      img: `${book1}`,
      author: "Arda, Luv",
    },
    {
      id: 5,
      title: "Expert Guide To Machine Learning",
      img: `${book2}`,
      author: "Ahmet, Luv",
    },
    {
      id: 6,
      title: "Crash Course in Python",
      img: `${book3}`,
      author: "John, Luv",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const numberDisplayed = 3;
  // const start = 0;
  // const end = start + 3;
  // const displayedItems: Array<any> = [];

  // displayedItems.push(
  //   items
  //     .slice(start, end)
  //     .map((item, i) => <CarouselItem key={i} item={item} />)
  // );

  // const styles = {
  //   ".react-multiple-carousel__arrow": {
  //     backgroundColor: "#0e76a8",
  //   },
  // };

  // if (isLoading) {
  //   return (
  //     <Box>
  //       <Box>Loading ....</Box>
  //     </Box>
  //   );
  // }

  // if (httpError) {
  //   return (
  //     <Box>
  //       <Box>{httpError}</Box>
  //     </Box>
  //   );
  // }

  return (
    <Paper elevation={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: isLoading ? "2em" : null,
        }}
      >
        {isLoading && <CircularProgress />}
        {httpError}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", py: "2em" }}>
        <Typography variant="h4" mb="1rem" textAlign="center">
          Find your next "I stayed up too late reading" book.
        </Typography>
        <Carousel
          responsive={responsive}
          renderArrowsWhenDisabled={true}
          // customLeftArrow="react-multiple-carousel__arrow"
        >
          {books
            ? books.map((book, i) => <CarouselItem key={i} item={book} />)
            : items.map((item, i) => <CarouselItem key={i} item={item} />)}
        </Carousel>
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "grey",
            border: "1px solid #D3D3D3",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#fff",
            },
            m: "0 auto",
          }}
        >
          View More
        </Button>
      </Box>
    </Paper>
  );
};

export default CarouselItems;
