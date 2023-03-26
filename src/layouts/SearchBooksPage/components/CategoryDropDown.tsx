import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CategoryDropDown = () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Box sx={{}}>
      <FormControl
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "grey",
          },
          "& .css-1dqx5z6-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            display: "none",
          },
          "& .MuiFormLabel-root": {
            fontSize: "1rem",
            color: "#fff",
          },
        }}
        variant="outlined"
      >
        {!category && (
          <InputLabel
            sx={{
              color: "#fff",
              // fontSize: "1rem",
            }}
          >
            Book Category
          </InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
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
          <MenuItem
            sx={{ color: category == "Ten" ? "#fff" : null }}
            value={10}
          >
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoryDropDown;
