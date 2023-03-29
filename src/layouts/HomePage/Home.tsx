import React from "react";
import { Box } from "@mui/material";
import Navbar from "../shared/components/Navbar";
import ExploreTopBooks from "./components/ExploreTopBooks";
import Carousel from "./components/CarouselItems";
import Heros from "./components/Heros";
import LibraryServices from "./components/LibraryServices";
import Footer from "../shared/components/Footer";

const Home: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </Box>
  );
};

export default Home;
