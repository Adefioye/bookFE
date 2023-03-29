import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CategoryDropDown = () => {
  const [category, setCategory] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setCategory(event.target.value as string);
  // };

  return (
    <Box sx={{}}>
      <FormControl
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "grey",
          },
          //MuiFormLabel-root
          // ".Mui-focused .MuiFormControl-root .MuiFormLabel-root": {
          //   display: "none !important",
          // },
          "& .MuiFormLabel-root": {
            fontSize: "0.8rem",
            color: "#fff",
          },
          "> label": {
            "& .Mui-focused": {
              display: "none",
            },
          },
        }}
        variant="outlined"
      >
        {!category && (
          <InputLabel sx={{ color: "#fff" }}>
            {category ? "" : "Book Category"}
          </InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            color: "#fff",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid darkgrey",
              "&:hover": {
                border: "1px solid darkgrey",
              },
            },
            ".MuiSvgIcon-root": {
              color: "#fff",
            },
            borderColor: "darkgrey",
            width: "8em",
            height: "3rem !important",
          }}
          MenuProps={{
            sx: {
              "& .Mui-selected": {
                backgroundColor: "darkgrey !important",
                "&:hover": {
                  backgroundColor: "lightgrey",
                },
              },
              "& .MuiMenuItem-root": {
                fontSize: "1rem",
                fontWeight: "400",
              },
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      {/* <TextField
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        select
        label={category ? "" : "Book Category"}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField> */}
    </Box>
  );
};

export default CategoryDropDown;
