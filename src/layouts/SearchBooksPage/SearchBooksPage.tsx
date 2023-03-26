import React, { useState } from "react";
import SearchBookItem from "./components/SearchBookItem";
import { Box, TextField, Button, IconButton } from "@mui/material";
import CategoryDropDown from "./components/CategoryDropDown";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const SearchBooksPage: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <Box sx={{ padding: "2em" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "end",
          mb: "2em",
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
            ml: "2em",
          }}
          disableRipple
        >
          Search
        </Button>
        <Box sx={{ ml: "4em" }}>
          <CategoryDropDown />
        </Box>
      </Box>
      <SearchBookItem />
    </Box>
  );
};

export default SearchBooksPage;
