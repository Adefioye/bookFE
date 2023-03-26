import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import Home from "./layouts/HomePage/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBooksPage from "./layouts/SearchBooksPage/SearchBooksPage";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchBooksPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
