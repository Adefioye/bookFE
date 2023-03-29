import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { bookData } from "./../../../data";

const SearchBookItem: React.FC = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(matchesSM);

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
              alignItems: matchesSM ? "center" : "flex-start"
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
