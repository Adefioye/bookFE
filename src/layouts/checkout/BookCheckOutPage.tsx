import { Box, Divider } from "@mui/material";

import BookInfo from "./components/BookInfo";
import LatestReviews from "./components/LatestReviews";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";

const BookCheckOutPage = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ mx: "3em" }}>
        <BookInfo />
        <Divider sx={{ borderBottomWidth: 3 }} />
        <LatestReviews />
      </Box>
      <Footer />
    </Box>
  );
};

export default BookCheckOutPage;
