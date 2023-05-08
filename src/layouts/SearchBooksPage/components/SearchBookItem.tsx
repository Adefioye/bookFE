import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import book1 from "./../../../Images/BooksImages/new-book-1.png";
import book2 from "./../../../Images/BooksImages/new-book-2.png";
import book3 from "./../../../Images/BooksImages/new-book-3.png";

interface CarouselItemType {
  id: number;
  title: string;
  imgSrc: string;
  authorName: string;
  description?: string;
}

const SearchBookItem: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const bookData: CarouselItemType[] = [
    {
      id: 1,
      title: "Advanced Techniques in C#",
      imgSrc: `${book1}`,
      authorName: "Arda, Luv",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      laudantium accusamus suscipit tenetur corporis ut quia odio, et
      ducimus pariatur vitae adipisci animi voluptate ab? Porro saepe
      asperiores praesentium numquam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt earum quam ea, quod maxime id laudantium
      praesentium doloribus? Saepe nihil porro qui nulla ratione laboriosam
      rerum magnam natus nemo quae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Deleniti, perferendis quos. Sed amet laudantium
      maiores expedita, animi atque vero modi recusandae quidem ipsam quam
      voluptatem totam et. Ducimus, porro corporis?`,
    },
    {
      id: 2,
      title: "Expert Guide To Machine Learning",
      imgSrc: `${book2}`,
      authorName: "Ahmet, Luv",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      laudantium accusamus suscipit tenetur corporis ut quia odio, et
      ducimus pariatur vitae adipisci animi voluptate ab? Porro saepe
      asperiores praesentium numquam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt earum quam ea, quod maxime id laudantium
      praesentium doloribus? Saepe nihil porro qui nulla ratione laboriosam
      rerum magnam natus nemo quae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Deleniti, perferendis quos. Sed amet laudantium
      maiores expedita, animi atque vero modi recusandae quidem ipsam quam
      voluptatem totam et. Ducimus, porro corporis?`,
    },
    {
      id: 3,
      title: "Crash Course in Python",
      imgSrc: `${book3}`,
      authorName: "John, Luv",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      laudantium accusamus suscipit tenetur corporis ut quia odio, et
      ducimus pariatur vitae adipisci animi voluptate ab? Porro saepe
      asperiores praesentium numquam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt earum quam ea, quod maxime id laudantium
      praesentium doloribus? Saepe nihil porro qui nulla ratione laboriosam
      rerum magnam natus nemo quae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Deleniti, perferendis quos. Sed amet laudantium
      maiores expedita, animi atque vero modi recusandae quidem ipsam quam
      voluptatem totam et. Ducimus, porro corporis?`,
    },
    {
      id: 4,
      title: "Advanced Techniques in C#",
      imgSrc: `${book1}`,
      authorName: "Arda, Luv",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      laudantium accusamus suscipit tenetur corporis ut quia odio, et
      ducimus pariatur vitae adipisci animi voluptate ab? Porro saepe
      asperiores praesentium numquam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt earum quam ea, quod maxime id laudantium
      praesentium doloribus? Saepe nihil porro qui nulla ratione laboriosam
      rerum magnam natus nemo quae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Deleniti, perferendis quos. Sed amet laudantium
      maiores expedita, animi atque vero modi recusandae quidem ipsam quam
      voluptatem totam et. Ducimus, porro corporis?`,
    },
    {
      id: 5,
      title: "Expert Guide To Machine Learning",
      imgSrc: `${book2}`,
      authorName: "Ahmet, Luv",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      laudantium accusamus suscipit tenetur corporis ut quia odio, et
      ducimus pariatur vitae adipisci animi voluptate ab? Porro saepe
      asperiores praesentium numquam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt earum quam ea, quod maxime id laudantium
      praesentium doloribus? Saepe nihil porro qui nulla ratione laboriosam
      rerum magnam natus nemo quae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Deleniti, perferendis quos. Sed amet laudantium
      maiores expedita, animi atque vero modi recusandae quidem ipsam quam
      voluptatem totam et. Ducimus, porro corporis?`,
    },
    {
      id: 6,
      title: "Crash Course in Python",
      imgSrc: `${book3}`,
      authorName: "John, Luv",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
      laudantium accusamus suscipit tenetur corporis ut quia odio, et
      ducimus pariatur vitae adipisci animi voluptate ab? Porro saepe
      asperiores praesentium numquam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Sunt earum quam ea, quod maxime id laudantium
      praesentium doloribus? Saepe nihil porro qui nulla ratione laboriosam
      rerum magnam natus nemo quae. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Deleniti, perferendis quos. Sed amet laudantium
      maiores expedita, animi atque vero modi recusandae quidem ipsam quam
      voluptatem totam et. Ducimus, porro corporis?`,
    },
  ];

  return (
    <Box sx={{}}>
      {bookData.map((book) => (
        <Paper
          key={book.id}
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: matchesSM ? "column" : "row",
            p: "1em",
            mt: "1em",
          }}
        >
          <Box
            sx={{
              flex: matchesSM ? "1 0 100%" : "1 0 20%",
              display: "flex",
              justifyContent: matchesSM ? "center" : "flex-start",
              alignItems: matchesSM ? "center" : "flex-start",
            }}
          >
            <img
              src={book.imgSrc}
              alt="book pics"
              width={matchesSM ? "40%" : "70%"}
            />
          </Box>
          <Box sx={{ flex: "1 0 60%", mb: matchesSM ? "1em" : null }}>
            <Typography
              variant="h4"
              sx={{
                mb: "0.3em",
                mt: matchesSM ? "0.3em" : null,
                textAlign: matchesSM ? "center" : "left",
              }}
            >
              {book.authorName}
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: "0.3em", textAlign: matchesSM ? "center" : "left" }}
            >
              {book.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: matchesSM ? "center" : "left" }}
            >
              {book.description}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1 0 20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" sx={{ textTransform: "none" }}>
              View Details
            </Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default SearchBookItem;
