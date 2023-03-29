import React, { useState } from "react";
import SearchBookItem from "./components/SearchBookItem";
import {
  Box,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CategoryDropDown from "./components/CategoryDropDown";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const SearchBooksPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ padding: "2em" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: matchesMD ? "column" : "row",
          justifyContent: "flex-start",
          alignItems: matchesMD ? "flex-start" : "center",
          mb: matchesMD ? null : "2em",
        }}
      >
        <TextField
          id="outlined-search"
          placeholder="Search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              width: "16em",
              height: "3rem",
              // border: "1px solid #D3D3D3",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #D3D3D3",
            },
          }}
          InputProps={{
            endAdornment: (
              <IconButton disableRipple onClick={() => setSearch("")}>
                {search && <ClearOutlinedIcon />}
              </IconButton>
            ),
          }}
        />
        <Button
          variant="outlined"
          sx={{
            width: "6rem",
            height: "3rem",
            borderColor: "green",
            ml: matchesMD ? null : "2em",
            mt: matchesMD ? "1em" : null,
            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
          disableRipple
        >
          Search
        </Button>
        <Box
          sx={{ ml: matchesMD ? null : "4em", mt: matchesMD ? "1em" : null }}
        >
          <CategoryDropDown />
        </Box>
      </Box>
      <SearchBookItem />
    </Box>
  );
};

export default SearchBooksPage;
