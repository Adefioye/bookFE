import Navbar from "./layouts/Navbar";
import ExploreTopBooks from "./layouts/ExploreTopBooks";
import Carousel from "./layouts/CarouselItems";
import Heros from "./layouts/Heros";
import LibraryServices from "./layouts/LibraryServices";
import Footer from "./layouts/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";


import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <ExploreTopBooks />
          <Carousel />
          <Heros />
          <LibraryServices />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
